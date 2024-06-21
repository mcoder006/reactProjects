import Ideas from "./IdeaItems"

const IdeaLister = ({ idealist, refreshData }: {idealist: any, refreshData: () => void}) => {
  return (
    <div className="w-[90vw] md:w-[50vw] mx-auto">
        {
            idealist.map((idea: any, index: Number) => {
                return <Ideas key={`${index}`} index={index} ideas={idea} refreshData={refreshData} />
            })
        }
    </div>
  )
}

export default IdeaLister