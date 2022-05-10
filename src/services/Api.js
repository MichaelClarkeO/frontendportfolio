const URL = "http://localhost:4000";
class Apiservice{
getAboutData=() => fetch(`${URL}/about`)

getProjectData=() => fetch(`${URL}/projects`)
}
export default new Apiservice()