import { useState } from "react"

export function WeeklyHome(){
    const[form, setForm] = useState({
        scriptureBook: "",
        scriptureChapter: "",
        scriptureVerse: "",
        saintName: "",
        saintDescription: "",
        saintFeastDay: "",
    })
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e:React.FormEvent){
        e.preventDefault();
        //get the data
        const res = await fetch("/api/weeklyInfo",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(form),
        })
    //get the data in json format
    const data = await res.json()
    if(!res.ok){
        throw new Error("Failed to Submit")
        console.error(data.error)
        return;
    }
    console.log("Updated Weekly data:", data);
}
    return(
        <div className="pl-12">
           <input type="text" name="scriptureBook"    placeholder="Book" value={form.scriptureBook}    onChange={handleChange} className="border  text-white font-cinzel"/>
           <input type="text" name="scriptureChapter" placeholder="Chapter" value={form.scriptureChapter} onChange={handleChange} className="border  text-white font-cinzel"/>
           <input type="text" name="scriptureVerse"   placeholder="Verse" value={form.scriptureVerse}   onChange={handleChange} className="border  text-white font-cinzel"/>
           <input type="text" name="saintName"        placeholder="Saint Name" value={form.saintName}        onChange={handleChange} className="border  text-white font-cinzel"/>
           <input type="text" name="saintDescription" placeholder="Saint Desc" value={form.saintDescription} onChange={handleChange} className="border  text-white font-cinzel"/>
           <input type="text" name="saintFeastDay"    placeholder="Feast Day" value={form.saintFeastDay}    onChange={handleChange} className="border  text-white font-cinzel"/>
           <button onClick={handleSubmit} className="border border-white/[.60] flex flex-col mt-5 px-10 ml-12">Submit</button>
        </div>
    )
}