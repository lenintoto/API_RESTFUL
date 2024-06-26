const tourModel = {

    async getAllToursModel(){
        // Punto 1
        const peticion= await fetch('http://localhost:4000/tours')
        
        // Punto 2
        const tours= await peticion.json()
        return tours
    },
    async createTourModel(newTour){
        const url = 'http://localhost:4000/tours'
        const peticion = await fetch(url,{
            method:'POST',
            body:JSON.stringify(newTour),
            headers:{'Content-Type':'application/json'}
        })
        const data = await peticion.json()

        return data
    },
    async getTourByIdModel(tourId){
        const response= await fetch(`http://localhost:4000/tours/${tourId}`)
        if(!response.ok){
            return{error:"Tour No Encontrado"}
        }
        const data = await response.json()
        return data
    },
    async updateTourModel(idTour,dataTour){
        //Punto 1
        const url = `http://localhost:4000/tours/${idTour}`
        const peticion = await fetch(url,{
            method:'PUT',
            body:JSON.stringify(dataTour),
            headers:{'Content-Type':'application/json'}
        })
        const data = await peticion.json()
        //Punto 2
        return data
    },async deleteTourModel(idTour){
        //Punto 1
        const url = `http://localhost:4000/tours/${idTour}`
        const peticion = await fetch(url,{
            method:'DELETE'
        })
        await peticion.json()
        //Punto 2
        return {msg:"Tour eliminado correctamente"}
    }
}
export default tourModel
