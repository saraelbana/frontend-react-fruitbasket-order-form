import "./ImgIcon.css";
function ImgIcon(iconProp){
    return(
        <label className= "ImgIcon">
            {iconProp.icon}
        </label>
    );
}
export default ImgIcon;