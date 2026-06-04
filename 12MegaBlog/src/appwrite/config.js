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
                collectionId: appwriteConfig.appwriteCollectionId,
                documentId: slug,
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
}


const service = new Service();
export default service;