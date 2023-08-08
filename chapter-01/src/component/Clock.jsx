
export default function Clock({ locale = "en-US" }) {
    return (
        <>
            <div className=" text-4xl text-green-500 pt-32">
                এখন সময়ঃ- { new Date().toLocaleTimeString(locale) }
            </div>
        </>
    )
}
