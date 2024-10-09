import './GalleryItem.css'

export const cardTemplate = (item) => {
  return `
    <li class="gallery-item" style="background-image: url(${
      item.urls.regular
    });">
    <div class="info">
        <div class="icons">
            <span class="photos-icon">📷 ${item.user.total_photos}</span>
            <span class="likes-icon">❤️ ${item.likes}</span>
        </div>
        <div class="visit-btn">
            <a href=${item.links.html} class="full-link"> Visitar</a>
        </div>
        <div class="profile">
            <img src="${
              item.user.profile_image.small
            }" alt="Avatar" class="avatar" style="border: 1px solid ${
    item.color
  }"/>
            <div class="name">${item.user.name}</div>
            <div class="date">📤 ${item.created_at.split('T')[0]}</div>
        </div>
    </div>
    </li>
    `
}
