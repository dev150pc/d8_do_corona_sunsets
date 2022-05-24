/**
 * 
 * Service Dama JS
 * 
 * 
 */

export class dama {
  welcome(){
    return 'welcome to DAMA'
  }
  click(name: string = null, configuration: any) {
    const element = document.querySelectorAll('[dm-click=' + name + ']')[0]
    element && element.addEventListener("click", configuration, false)
    return 'render';
  }
  hide(ids: any = []) {
    ids.map((id: any) => {
      const element = document.getElementById(id)
      if (element) element.style.display = "none";
    })
    return 'render';
  }
  show(id: string = null) {
    const element = document.getElementById(id)
    if (element) element.style.display = "block";
    return 'render';
  }
}