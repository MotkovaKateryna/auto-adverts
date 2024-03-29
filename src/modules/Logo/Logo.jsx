import { StyledLogoLink } from './Logo.styled';
// import { ReactComponent as IconCar } from '../../../public/logoCar.svg';

export const Logo = () => {
  return (
    <StyledLogoLink to={'/'}>
      <p className="logo-title">RentalDrive</p>

      {/* <img
        className="logo-icon"
          src="/public/logo.png"
          alt="logo-car"
        /> */}
      <img
        className="logo-icon"
          src="https://th.bing.com/th/id/R.cbe19108684ad12a0e52e6c23f985d8d?rik=Vr3QlyCAxHWFSQ&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery2%2fCar-Free-Download-PNG.png&ehk=QFsFqW%2b8%2fBreBVo425hUHxTKC7UrXesdE3byNh04NR8%3d&risl=&pid=ImgRaw&r=0"
          alt="logo-car"
        />
      {/* <img
        className="logo-icon"
        src="https://www.bing.com/images/search?view=detailV2&ccid=dofiS1lb&id=86C7C3594519FEC02A311F225CA09498B14EF76A&thid=OIP.dofiS1lbDbvM7eFL!_9AMQAHaEE&mediaurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.7687e24b595b0dbbccede14bffd00c40%3Frik%3DavdOsZiUoFwiHw%26riu%3Dhttp%253a%252f%252fwww.pngall.com%252fwp-content%252fuploads%252f2016%252f07%252fCar-PNG-Image.png%26ehk%3DF9gaKhdKWEa%252f8bDRqkEmeL2LVEh5zF7adJDc5A3gL3k%253d%26risl%3D1%26pid%3DImgRaw%26r%3D0&exph=1400&expw=2547&q=png+auto+car&simid=608021074654990937&form=IRPRST&ck=23FF654E70B04E888DDBAB8DF1A9FD62&selectedindex=9&itb=1&ajaxhist=0&ajaxserp=0&vt=0"
        alt="logo-car"
      /> */}
      {/* <IconCar className="logo-icon" /> */}
    </StyledLogoLink>
  );
};
