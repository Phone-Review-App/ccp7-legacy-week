# Ken-Ken-Pa (greenfield project)

### [Try Ken-Ken-Pa](https://ken-ken-pa.onrender.com/)
(Depolyment Link Temperary Out of Order)

# Introduction

Ken-Ken-Pa is an interactive map of Japan that allows you to keep a virtual diary of your journey in the country. After logging in, a user can click on prefectures they've visited and either add Memories (photos with an optional caption) or view all the Memories that other users have uploaded for that prefecture.  Users can also view all their personal memories from all the prefectures they've visited.

![mapofjapan](https://user-images.githubusercontent.com/6261485/229280879-2bc15c6a-c7ee-4d4c-b4c5-c53ff43a1aec.png)

# Design Docs

- [Figma](https://www.figma.com/file/uEQxLqI7VDrZkAqAyoZcnA/Greenfield?node-id=0%3A1&t=ISgGuJCL8iZwKYNq-1)
- db schema:

![dbschema](https://user-images.githubusercontent.com/6261485/229280886-50854d71-21a4-4076-9b96-7d9101549f0b.png)

# Features

## Implemented

- Clickable Map of Japan
- Popup menu appears when clicking a prefecture
  - User can navigate to `PrefectureMemories` or `AddNewMemory` views for the selected prefecture
- Localized UI (English/Japanese)
- `Memories` UI for viewing currently logged-in user's memories from all prefectures
- `PrefectureMemories` UI for viewing all users' memories from a specified prefecture
- `AddNewMemory` UI for uploading a new memory
- `Login` UI for user login
- `NavBar` UI
- Express server initialized
- Firebase integration initialized
- Database migration and seed files initialized

## To-do

- Home (Map View):
  - [ ] Clicking a greyed-out prefecture should mark the prefecture as visited → highlights green
  - [ ] Highlight all visited prefectures for currently logged-in user
  
- Other UI:
  - [ ] Create UI for user signup
  - [ ] Create UI components for displaying photos in `Memories` and `PrefectureMemories` - [#46](https://github.com/LakGillJPN/ccp7-greenfield/issues/46)
  - [ ] Finish CSS styling - [#28](https://github.com/LakGillJPN/ccp7-greenfield/issues/28), [#37](https://github.com/LakGillJPN/ccp7-greenfield/issues/37)
  - [ ] Dynamically display buttons in `NavBar` based on current view - [#40](https://github.com/LakGillJPN/ccp7-greenfield/issues/40)

- Backend:
  - [ ] Run Express server on deployment - [#47](https://github.com/LakGillJPN/ccp7-greenfield/issues/47)
  - [ ] Setup production database
  - [ ] Implement API endpoints for storing/accessing photos (memories)
  - [ ] Implement API endpoints for storing/accessing user-prefecture relations


# Attributions
Map information was sourced from the public domain dataset [Natural Earth Data](https://www.naturalearthdata.com/).
