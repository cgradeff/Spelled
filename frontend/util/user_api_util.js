export const fetchUser = userId => (
	$.ajax({
		url: `/api/users/${userId}`,
        method: 'GET'
	})
)

export const editUser = user => (
	$.ajax({
		url: `/api/users/${user.id}`,
		method: PATCH,
		data: { user }
	})
)