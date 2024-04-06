export default defineNuxtRouteMiddleware(() => {
    const currentUser = useSupabaseUser()
    if(!currentUser.value){
        return navigateTo("/login")
    }
})