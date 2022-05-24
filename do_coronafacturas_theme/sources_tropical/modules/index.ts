// IMPORT ROUTES 
const { routes } = require(`/src/ts/config/routes.ts`)

let route: any = routes.find( (item: any) => {
	const responseItem:boolean = Array.isArray(item.path) ?
		item.path.some( (itemPath:string) => checkRoutePath(itemPath) ) :
		checkRoutePath(item.path)

	return responseItem
})

// Check route with location pathname
function checkRoutePath( itemPath:any ):boolean {
	return window.location.pathname === itemPath
}

require(`/src/ts/services/general.ts`).page()
// require(`datalayers.ts`)
// console.log( route.hasOwnProperty('page') ? 'has page' : 'has not page' )
if(route){
    route.hasOwnProperty('page') ? require(`/src/ts/pages/${route.page}.ts`).page() : require(`/src/ts/pages/${route.component}.ts`).component()
}else{
    routeDontFound()
}

/**
 * dinamicRoutes
 * 
 * This function generate the dinamic routes when yu send in the route :
 * 
 * @returns 
 */
function dinamicRoutes(){
	let otherRoutes:any = routes.filter((item: any) => item.path.includes(':'))
	let getRouteCurrent:any = location.pathname.split('/')
	let request:object = {}
	otherRoutes.map( (route: any) => request = getRouteCurrent[1] == (route.path.split('/'))[1] ? { 'status': true, 'route': route} : { 'status': false })
	return request
}

/**
 * routeDontFound
 * 
 * This function work when route wasn't found
 * 
 * @returns 
 */
function routeDontFound(){
	const dinamic: any = dinamicRoutes();
	dinamic.status && require(`/src/ts/components/${dinamic.route.component}.ts`).page()
}