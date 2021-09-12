export const fetchListings = () => (
  $.ajax({
    method: 'GET',
    url: 'api/listings',
  })
);

export const fetchListing = id => (
  $.ajax({
    method: 'GET',
    url: `api/listings/${id}`
  })
);


export const createListing = listing => (
  $.ajax({
    method: 'POST',
    url: 'api/listings',
    data: { listing },
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