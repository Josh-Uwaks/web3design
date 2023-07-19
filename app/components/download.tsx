
export default function DownloadSteps({data}: {data: {title:string, description: string}}){
    return(
        <>
        <div className="p-6 grid grid-cols-2">
            {data && (
                <div>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </div>
            )}

            <div>
               <div className="h-[400px]"></div>
            </div>
        </div>
        </>
    )
}