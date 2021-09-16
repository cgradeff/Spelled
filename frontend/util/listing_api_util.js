export const fetchListings = () =>
  $.ajax({
    method: 'GET',
    url: 'api/listings',
  })

export const fetchListing = (id) =>
  $.ajax({
    method: 'GET',
    url: `api/listings/${id}`,
  })

export const createListing = (formData) => {
  return $.ajax({
    method: 'POST',
    url: 'api/listings',
    data: formData,
    contentType: false,
    processData: false,
  })
}

export const updateListing = (listing) =>
  $.ajax({
    url: `/api/listings/${listing.id}`,
    method: 'PATCH',
    data: { listing },
  })

export const deleteListing = (listingId) =>
  $.ajax({
    url: `/api/listings/${listingId}`,
    method: 'DELETE',
  })
