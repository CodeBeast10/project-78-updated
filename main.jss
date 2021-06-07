var images = [ "https://img1.cgtrader.com/items/909627/b25bde6f2a/cartoon-family-rigged-v4-3d-model-rigged-obj-fbx-ma-mel.jpg" ,"https://static.turbosquid.com/Preview/2018/08/20__02_59_43/BQ03.png06589DB3-53C0-4068-B7AC-D29629AA1EB3DefaultHQ.jpg", "https://www.bestof3dmodels.eu/sites/default/files/styles/basic_adaptive_ls_scale_1200/public/3D-cartoon-man-rigged_D.jpg?itok=-E-a8ODC" ,"https://i.pinimg.com/736x/82/60/7e/82607e01170d221d147a8abfd6c950f7.jpg", "https://i.pinimg.com/originals/f9/a7/43/f9a7433f38889aaaf5fab27f015b6799.jpg"];
var names = ["My Family", "Jenny Martinez", "Joseph Martinez", "Tommy Martinez", "Lily Martinez"];
var f= 0;
function update() {

    f++;
    var coverpicarray = 4
    if(f >  coverpicarray)
    {
        f = 0;
    }
    var updatedimages= images[f];
    var updatednames= names[f];
    document.getElementById(coverpic).src= updatedImage;
    document.getElementById(JennyMartinez).innerHTML= updatedNames;
}