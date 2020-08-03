import ImagePicker from 'react-native-image-picker';


const options = {
    title: 'Select your picture',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

const Picker = () => {

    ImagePicker.showImagePicker(options, async (response) => {
        console.log("helu");
        const { uri, type, fileName } = response
        let file = { uri, type, fileName }
        console.log('Response = ', file);
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else {
            //HANDLE THE FILE
            return file
        }
    });
}



export default Picker