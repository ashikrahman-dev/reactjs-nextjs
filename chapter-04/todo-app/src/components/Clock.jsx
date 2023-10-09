/* eslint-disable react/prop-types */
export default function Clock(props) {
    return (
        <>
            {new Date().toLocaleTimeString(props.local)}{" "}
            <span className=""> = Bangladesh Time.</span>
        </>
    );
}
