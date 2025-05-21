const LOGO_TEXT = "https://raw.githubusercontent.com/molomojc/Portfolio/main/LogoText.png";
const LOGO = "https://raw.githubusercontent.com/molomojc/Portfolio/main/this.png";
const Profile_Pic = "https://raw.githubusercontent.com/molomojc/Portfolio/main/me.png";

const request = async (url, defaultValue) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.blob();
    return URL.createObjectURL(data);
  } catch (error) {
    console.error("Error fetching logo:", error);
    return defaultValue;
  }
 
};

export const fetchImage = async () => {
  return await request(LOGO, "./assets/this.png");
};

export const fetchLogoText = async () => {
  return await request(LOGO_TEXT, "./assets/LogoText.png");
};

export const fetchProfilePic = async () => {
  return await request(Profile_Pic, "./assets/me.png");
}