import appwriteConfig from "../config/appwriteConfig";
import { Client,ID,TablesDB,Storage,Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    storage;

    // account tab banna chahiye jab object bane jisse constructor call ho
    constructor(){
        this.client
            .setEndpoint(appwriteConfig.appwriteUrl)
            .setProject(appwriteConfig.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    // is tarah is liye taki under the hood kya ho raha hai isse kisi matlab na ho
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.TablesDB.createRow({
                databaseId: appwriteConfig.appwriteDatabaseId,
                tableId: appwriteConfig.appwriteCollectionId,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            })
        } catch (error) {
            throw error;
            
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.TablesDB.updateRow({
                databaseId:appwriteConfig.appwriteDatabaseId,
                tableId:appwriteConfig.appwriteCollectionId,
                rowId:slug,
                data:{
                    title,
                    content,
                    featuredImage,
                    status
                }
            })
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug){
        try {
            await this.TablesDB.deleteRow({
                databaseId:appwriteConfig.appwriteDatabaseId,
                tableId:appwriteConfig.appwriteCollectionId,
                rowId:slug
            })
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.TablesDB.getRow({
                databaseId:appwriteConfig.appwriteDatabaseId,
                tableId:appwriteConfig.appwriteCollectionId,
                documentId:slug
            })
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false;
        }
    }

    async getPosts({queries = [Query.equal("status","active")]}){
        try {
            return await this.TablesDB.listRows({
                databaseId:appwriteConfig.appwriteDatabaseId,
                tableId:appwriteConfig.appwriteCollectionId,
                queries:queries
            })
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false;
        }
    }

    // file upload service
    async uploadFile(file){
        try {
            return await this.storage.createFile({
                bucketId:appwriteConfig.appwriteBucketId,
                fileId:ID.unique(),
                file:file
            })
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    
}


const service = new Service();
export default service;