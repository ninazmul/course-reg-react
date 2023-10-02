# my-course-roster-ninazmul

# 3Project features:

* A credit system is implemented to track user credit or currency within the application.
* Users are notified when their credit balance is exceeded.
* Alerts or warnings are sent when users approach a predetermined credit limit or threshold.

# Discussion about how I managed the state in my assignment project:

In my assignment project, state management was vital for a smooth user experience. I used React Hooks, like useState and useEffect, to handle state within components. Key strategies included:

* Centralization: I centralized state using React's Context API or Redux for consistent data sharing.

* Component-Based: Each component managed its local state, promoting modularity.

* Async Data Handling: I managed loading and error states during API data fetching.

* Immutability: Updates followed immutability principles for predictable state changes.

* Dependency Control: useEffect dependencies optimized performance.

* Custom Hooks: Complex state logic was encapsulated in custom hooks.

* Real-Time Updates: Real-time data used WebSockets or SSE for live updates.

* Error Handling: Robust error handling ensured user-friendly error messages.

Efficient state management was key to a responsive and reliable application.
