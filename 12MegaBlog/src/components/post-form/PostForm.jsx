import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../index'
import appWriteService from "../../appwrite/config"
import { useNavigate } from "react-router-dom"
import './PostForm.scss'

const PostForm = () => {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "",
    }
  })

  const navigate = useNavigate()
  const userData = useSelector(state => state.auth.userData)

  // if user submitted form
  const submit = async (data) => {
    // if post hai
    if (post) {
      // new image upload 
      const imageFile = data.image[0] ? await appWriteService.uploadFile(data.image[0]) : null

      // old image ko delete bhi toh karna padega
      if (imageFile) appWriteService.deleteFile(post.featuredImage)

      // now will update post data
      const dbPost = await appWriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined
      })
      // updated post ka id milte hi redirect to that post
      if (dbPost) navigate(`/post/${dbPost.$id}`)
    } else {
      // new post agar image aaye toh image ko upload karo
      const file = data.image[0] ? await appWriteService.uploadFile(data.image[0]) : null

      // if file hai toh 
      if (file) {
        const fileId = file.$id
        data.featuredImage = fileId
        const dbPost = await appWriteService.createPost({
          ...data,// spread is liye kyo ki userId nahi diye 
          userId: userData.$id
        })

        // agar post create gai toh user ko redirect bhi kara do
        if (dbPost) navigate(`/post/${dbPost.$id}`)
      }
    }
  }

  // kuchh bhi likhte hi uske spaces ke jaga dashed ho jayenge and all
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/^[a-zA-Z\d\s]+/g, "-")
        .replace(/s/g, "-")

      return ""
    }
  })

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }))
      }
    })

    // memory management [optimization] - put it in variable then unsubscribe() it
    return () => subscription.unSubscribe()
  }, [watch, slugTransform, setValue])

  return (
    <form onSubmit={handleSubmit(submit)} className="post-form">
      <div className="post-form__left-section">
        <Input
          label="Title :"
          placeholder="Title"
          className="post-form__input-group"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="post-form__input-group"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
          }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
      </div>
      <div className="post-form__right-section">
        <Input
          label="Featured Image :"
          type="file"
          className="post-form__input-group"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="post-form__image-preview">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="post-form__image-preview"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="post-form__input-group"
          {...register("status", { required: true })}
        />
        <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="post-form__submit-btn">
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  )
}

export default PostForm