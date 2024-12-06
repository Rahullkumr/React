import logo from '../../../assets/task/layout02/logo.png'
let Bannertop = ()=>{
    return (
        <div id="bannertop">
            <div id='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div id='banner-top-mid'>
            <p>
                <h5>JOIN NOW</h5><br />
                Lorem ipsum dolor sit consectetur adipisicing elit. Neque id ratione!
            </p>
            </div>
            <div id='free-for-all'>
                <h4>FREE FOR EVERYONE</h4>
            </div>
        </div>
    );
}
export default Bannertop;