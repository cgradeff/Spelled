export const fetchListings = data => (
  $.ajax({
    method: 'GET',
    url: 'api/listings',
    data
  })
);

export const fetchListing = id => (
  $.ajax({
    method: 'GET',
    url: `api/listings/${id}`
  })
);

export const 

export const createListing = listingForm => (
  $.ajax({
    method: 'POST',
    url: 'api/listings',
    data: listingForm,
    contentType: false,
    processData: false
  })
);

export const updateListing = listing => (
    $.ajax({
        url: `/api/listings/${listing.id}`,
        method: 'PATCH',
        data: { listing }
    })
)

export const deleteListing = listingId => (
    $.ajax({
        url: `/api/listings/${listingId}`,
        method: 'DELETE'
    })
)