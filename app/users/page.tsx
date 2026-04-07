import RegisterUser from "@/components/ui/Users/RegisterUser";
/*
Create a page for non users to create a User Profile.
Needs to pass in a user Object for if the user is already registered
    -Grey out the background
    -Show empty profile image with clickable PFP changer
    -Tags to show affiliation, 
    -Popup, are you already a user? NO-Create account:YES-Sign-in
    -If YES Log in
    -If NO fade into create Account popup
*/
export default function usersPage(){
     return (
    <main className="flex min-h-screen" style={{ background: "#080808" }}>
      {/* Form Panel */}
      <div className="w-full md:w-1/3 flex justify-center items-center" style={{ background: "#080808", padding: "3rem 2.5rem" }}>
        <RegisterUser />
      </div>
 
      {/* Painting Panel */}
      <div
        className="hidden lg:flex w-2/3 bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: "url('/JesusWithRabbis.jpg')" }}
      >
        {/* Dim the painting */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
        {/* Left fade into form panel */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #080808 0%, transparent 28%)" }} />
      </div>
    </main>
  );
}