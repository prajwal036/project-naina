import { Client, Account } from "appwrite";

export const client = new Client();

console.log(" endpoint: ", process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT);
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("677a31d1003579ead7f0"); // Replace with your project ID

// console.log("client : ", client);
export const account = new Account(client);
export { ID } from "appwrite";
