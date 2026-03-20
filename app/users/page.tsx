import CreateUser from "@/components/ui/Users/CreateUsers"


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
    return( 
    <main className="flex min-h-screen items-center justify-center bg-[#a09080]">
        <CreateUser />
    </main>

    )
}