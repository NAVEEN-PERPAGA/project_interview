Tech Stack
- Next.js
- React.js
- Tailwind CSS
- Redux Toolkit
- TypeScript
- ShadcnUI

Folder Structure

App Router is used with folder name for routing. After filling details in login page, user will be redirected to dashboard page. In dashboard folder, two nested folders named users and posts are added. In users folder for individual user details slug [id] folder is added. For UI components _ui folder is added. For redux functions _reduxFunctions folder is added. Inside _utils folder types for different data types is defined. Whole project is made in typescript.
- src
    - app
        - dashboard
            - users
                - [id]
                    - layout.tsx
                    - page.tsx
            - layout.tsx
            - page.tsx
        - _ui
            - dashboardCard.tsx
            - header.tsx
            - sidebar.tsx
        - _reduxFunctions
            - posts.ts
            - user.ts
        - globals.css
        - layout.tsx
    - _reduxLib
        - hooks.ts
        - store.ts
    - _ui
        - common
            - Header.tsx
        - dashboard
            - DashboardCard.tsx
        - sidebar
            - Sidebar.tsx
    - pages
        - _app.tsx
        - _document.tsx
    - public
        - favicon.ico
    - reduxLib
        - hooks.ts
        - store.ts

