export const Info = () => {
    return (
        <div className="flex items-center justify-center flex-col mt-[5.5rem]">
            <h1 className="text-5xl rounded text-black font-bold uppercase mb-2">contact</h1>
            <p className='text-center'>Get in touch!</p>
            <div className="py-[100px] text-xl text-center">
                <p className='pb-4'>
                    Jim Fang, Co-leader<br /><a href="mailto:yfang@college-prep.org" className="underline decoration-dotted">yfang@college-prep.org</a>
                </p>
                <p>
                    Julian Vuong, Co-leader<br /><a href="mailto:jvuong@college-prep.org" className="underline decoration-dotted">jvuong@college-prep.org</a>
                </p>
            </div>
        </div>
    )
}