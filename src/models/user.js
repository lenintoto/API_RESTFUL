import bcrypt from "bcrypt"

const userModel = {

    async registerUserModel(newUserData) {
        const url = `http://localhost:4000/users`
        const peticion = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(newUserData),
            headers: { 'Content-Type': 'application/json' }
        })

        const data = await peticion.json()
        return data
    },
    async loginUserModel(userName,password) {
        const url = `http://localhost:4000/users`
        const peticion = await fetch(url)
        const users = await peticion.json()
        const user = users.find(user => user.username === userName)
        if (!user) {
            return {error: "Username o password incorrect" }
        } const passwordMatch = await bcrypt.compare(password, user.password)
        if (user && passwordMatch) {
            return user
        } else {
            return { error: "Username o password incorrect" }
        }
    }
}
export default userModel;