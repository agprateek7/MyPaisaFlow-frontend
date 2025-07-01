import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile) => {
    const formData = new FormData();
    // Append the image file to the FormData object
    formData.append("image", imageFile);

    try {
        const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data; // Assuming the response contains the image URL or relevant data
    } catch (error) {
        console.error("Image upload failed:", error);
        throw error; // Re-throw the error to be handled by the calling function
    }
};

export default uploadImage;