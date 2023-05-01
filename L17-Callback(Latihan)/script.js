$(".search-button").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=83be496c&s=" + $(".input-keyword").val(),
    success: (result) => {
      const movies = result.Search;
      // console.log(movies);
      let cards = "";
      movies.forEach((movie) => {
        cards += `<div class="col-md-3 my-5 col-6">
                    <div class="card">
                        <img src="${movie.Poster}" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${movie.Title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                           <button type="button" class="btn btn-primary modal-detail-button" data-imdbid="${movie.imdbID}" data-bs-toggle="modal" data-bs-target="#movieDetailModal">
  Launch demo modal
</button>
                        </div>
                    </div>
                 </div>`;
      });
      document.querySelector(".movie-container").innerHTML = cards;
      // $(".movie-container").html(cards);

      // Ketika tombol di klik
      $(".modal-detail-button").on("click", function () {
        // Cara cek
        //   console.log($(this).data("imdbid"));
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=83be496c&i=" +
            $(this).data("imdbid"),
          success: (pilih) => {
            const movieDetail = `<div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="${pilih.Poster}" class="img-fluid">
                            </div>
                            <div class="col-md">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <h4>Title</h4>
                                    </li>
                                    <li class="list-group-item"><strong>Director : </strong> ${pilih.Director}</li>
                                    <li class="list-group-item"><strong>Actor : </strong> ${pilih.Actors}</li>
                                    <li class="list-group-item"><strong>Writer : </strong>${pilih.Writer}</li>
                                    <li class="list-group-item"><strong>Plot : </strong>${pilih.Plot}</li>
                                </ul>
                            </div>
                        </div>
                    </div>`;

            document.querySelector(".modal-body").innerHTML = movieDetail;
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});
