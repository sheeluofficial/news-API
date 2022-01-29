function storeSearchterm(term) {

    localStorage.setItem("term",JSON.stringify(term))
    window.location.href = "search.html"

}

export default storeSearchterm