
function imageSearch() {
	//Declare Variables
	var userSearch, search, photoGallery, photo, i, p;
	userSearch = document.getElementById('searchBar');
	search = userSearch.value.toLowerCase();
	photoGallery = document.getElementById('gallery');
	photo = photoGallery.children;
	
	//Loop through photos and compare captions to user's search input
	for (i = 0; i < photo.length; i++) {
		p = photo[i];
		if (p.getAttribute('data-caption').toLowerCase().indexOf(search) > -1) {
			photo[i].style.display = "";
		} else {
			photo[i].style.display = "none";
		}
	}
}