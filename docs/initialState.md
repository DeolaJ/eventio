# Documentation for Initial State

## Auth State

- `user`: Contains the current user information
- `isAuthenticated`: Shows if the current user is logged in or not
- `isLoggingIn`: Reflects the loading state when a user is signing in
- `isCreatingAccount`: Reflects the loading state when a user is signing up
- `isLoggingOut`: Reflects the loading state when a user is logging out

## Event State

- `events`: Contains all events
- `activeEvent`: Shows the current event in view. This is only populated on the Event Details Page
- `isFetchingEvent`: Reflects the loading state if a user is fetching a particular event
- `isFetchingEvents`: Reflects the loading state if a user is fetching all events
- `isCreatingEvent`: Reflects the loading state if a user is creating an event
- `isUpdatingEvent`: Reflects the loading state if a user is updating an event
- `isDeletingEvent`: Reflects the loading state if a user is deleting an event
- `isUpdatingAttendeeStatus`: Reflects the loading state if a user is deciding whether to join or leave an event, with the event id.
- `isEditingEvent`: Reflects the state if a user is currently filling the Event Details Form
