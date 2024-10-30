import logo from "../assets/logo.svg";

function Logo({ className }) {
    return (
        <>
            <div>
                <img className={ className } src={ logo } alt="logo" />
            </div>
        </>
    );
}

export default Logo;