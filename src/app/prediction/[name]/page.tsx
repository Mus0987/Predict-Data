const getPredictedAge= async(name:string)=>{
    const res = await fetch(`https://api.agify.io/?name=${name}`)
    return res.json()
}
const getPredictedGender= async(name:string)=>{
    const res = await fetch(`https://api.genderize.io?name=${name}`);
    return res.json()
}
const getPredictedCountry= async(name:string)=>{
    const res = await fetch(`https://api.nationalize.io?name=${name}`)
    return res.json()
}
interface Params{
    params: {name:string}
}
export default async function Page({ params }:Params){

const ageData = getPredictedAge(params.name)
const countryData = getPredictedCountry(params.name)
const genderData = getPredictedGender(params.name)

const [age,country,gender] = await Promise.all([
    ageData,
    countryData,
    genderData
])

    return(
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden m-10 p-4">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Personal Info</div>
        
        <div className="block mt-5 text-lg leading-tight text-black">Age: {age?.age}</div>
        <div className="block mt-2 text-lg leading-tight text-black">Gender: {gender?.gender}</div>
        <div className="block mt-2 text-lg leading-tight text-black">Nationality: {country?.country[0]?.country_id}</div>
      </div>
    )
}