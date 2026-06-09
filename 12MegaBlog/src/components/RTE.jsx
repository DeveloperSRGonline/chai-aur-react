import React from 'react'
import { Editor } from "@tinymce/tinymce-react"
import { Controller } from "react-hook-form"

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div>
      {label && <label className="">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: false,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor"
              ],
              toolbar:
                "undo red fore undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style: "body { font-family: 'Helvetica', sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  )
}

// NOTES : control react hook form se aata hai ,and ye hi responsible hai is component ki saari state ko us form mein le jane ke liye
// control jo bhi parent dega vo controller mein pass kar denge
// render={({field:{onChange}}) => {}} is fiend mein kuchh bhi agar changes hota hai toh mujhe inform kar dena 
