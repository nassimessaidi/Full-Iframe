function apply()
{
    const x = document.querySelector(".embed-responsive-item");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const url = urlParams.get('url')
    let base_url = window.location.origin+window.location.pathname;
    if (url == null)
        x.src = base_url;
    else 
        x.src = url;     
}   