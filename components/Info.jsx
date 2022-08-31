export const Info = () => {
    return (
        <div className="flex items-center justify-center flex-col mt-[5.5rem]">
            <h1 className="text-5xl rounded text-black font-bold uppercase mb-2">contact</h1>
            <p className="text-center font-light">Get in touch!</p>
            <div className="py-[100px] text-xl text-center">
                <p className='pb-4'>
                    Jim Fang, Co-leader<br />Julian Vuong, Co-leader<br />
                </p>
                <p>
                    <a href="mailto:makers@college-prep.org" className="underline decoration-dotted">makers@college-prep.org</a>
                </p>
            </div>
        </div>
    )
}