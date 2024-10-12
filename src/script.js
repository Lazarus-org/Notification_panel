// Open the notification page
document.getElementById('bell-icon').addEventListener('click', function() {
    document.querySelector('.back-origin').style.display = 'none';
    document.querySelector('.new-notif-page').style.display = 'flex';
});

// The nav section is focused on New Notif and Activities
const newNotifTab = document.getElementById('new-notif');
const activitiesTab = document.getElementById('activities');
const newNotifPage = document.querySelector('.new-notif-page');
const activitiesPage = document.querySelector('.activities-page');

newNotifTab.addEventListener('click', () => {
    newNotifPage.style.display = 'flex';
    activitiesPage.style.display = 'none';
    newNotifTab.classList.add('active');
    activitiesTab.classList.remove('active');
});

activitiesTab.addEventListener('click', () => {
    newNotifPage.style.display = 'none';
    activitiesPage.style.display = 'flex';
    activitiesTab.classList.add('active');
    newNotifTab.classList.remove('active');
});

// Mark All As Read
document.querySelector('.mark-all-read-icon').addEventListener('click', function() {
    document.querySelector('.new-notif-page').style.display = 'none';
    document.querySelector('.empty-notification').style.display = 'flex';
});

document.querySelector('.mark-all-read-icon').addEventListener('click', function() {
    document.querySelector('.new-notif-page').style.display = 'none';
    document.querySelector('.empty-notification').style.display = 'flex';
    document.querySelector('.empty-notification').style.opacity = 1;
    document.querySelector('.empty-notification').style.animation = 'none';
});

// Button to close notification pages
const closeButtons = document.querySelectorAll('.top-page-close');

closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        document.querySelector('.new-notif-page').style.display = 'none';
        document.querySelector('.empty-notification').style.display = 'none';
        document.querySelector('.activities-page').style.display = 'none';
        document.querySelector('.settings-page').style.display = 'none';

        document.querySelector('.back-origin').style.display = 'flex';
    });
});

// Setting Page
document.querySelectorAll('.setting-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        document.querySelector('.activities-page').style.display = 'none';
        document.querySelector('.new-notif-page').style.display = 'none';
        
        document.querySelector('.settings-page').style.display = 'flex';
        document.querySelector('.settings-page').style.animation = 'none';
    });
});

// Tick
const subcategories = document.querySelectorAll('.notification-setting-subcategory');

subcategories.forEach((subcategory) => {
    const tickIcon = subcategory.querySelector('.tick-icon');
    const tickBox = subcategory.querySelector('.tick-box');

    const toggleTick = () => {
        if (tickIcon) {
            tickIcon.classList.toggle('hidden');

            if (!tickIcon.classList.contains('hidden')) {
                tickBox.style.backgroundColor = '#F924A4';
            } else {
                tickBox.style.backgroundColor = '#FFA4DB';
            }
        }
    };

    subcategory.addEventListener('click', toggleTick);

    if (tickIcon) {
        tickIcon.addEventListener('click', (event) => {
            event.stopPropagation();
            toggleTick();
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const tickBoxes = document.querySelectorAll('.tick-box-choice');

    tickBoxes.forEach(tickBox => {
        tickBox.addEventListener('click', () => {
            tickBoxes.forEach(box => {
                box.classList.remove('active');
            });
            tickBox.classList.add('active');
        });
    });
});

// Button to activate and deactivate settings sections
document.addEventListener('DOMContentLoaded', () => {

    const onOffButtons = document.querySelectorAll('.on-off-disturb');

    onOffButtons.forEach(button => {
        button.addEventListener('click', () => {
            const circle = button.querySelector('div');

            button.classList.toggle('active');

            if (button.classList.contains('active')) {
                circle.style.transform = 'translateX(25px)';
                button.style.backgroundColor = '#F924A4';
            } else {
                circle.style.transform = 'translateX(0)';
                button.style.backgroundColor = '#FFA4DB';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const onOffButtons = document.querySelectorAll('.on-off');

    onOffButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');

            let nextSubcategoryBox = button.closest('.notification-setting').nextElementSibling;

            if (nextSubcategoryBox && nextSubcategoryBox.classList.contains('notification-setting-subcategory-box')) {
                const allSubcategories = nextSubcategoryBox.querySelectorAll('.notification-setting-subcategory');

                allSubcategories.forEach(subcategory => {
                    if (!button.classList.contains('active')) {
                        subcategory.classList.remove('disabled');
                    } else {
                        subcategory.classList.add('disabled');
                    }
                });
            }
        });
    });
});

// The arrow symbol corresponding to the settings page
document.addEventListener('DOMContentLoaded', () => {
    const collapseArrows = document.querySelectorAll('.collapse-arrow');

    collapseArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {

            arrow.classList.toggle('rotated');
            const subcategoryBox = arrow.parentElement.nextElementSibling;
            if (subcategoryBox && subcategoryBox.classList.contains('notification-setting-subcategory-box')) {

                if (subcategoryBox.style.display === 'none') {
                    subcategoryBox.style.display = 'block';
                } else {
                    subcategoryBox.style.display = 'none';
                }
            }
        });
    });
});

// Close Notification
document.addEventListener('DOMContentLoaded', function() {

    const closeButtons = document.querySelectorAll('.close-notif');

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const boxNotif = this.closest('.box-notif');
            if (boxNotif) {
                boxNotif.remove();
            }
        });
    });
});

// Clear activities button
document.querySelector(".clear-active").addEventListener("click", ()=>{
    document.querySelector(".activities-page").style.display = "none";
    document.querySelector(".empty-notification").style.display = "flex";
})
document.querySelector('.clear-active').addEventListener('click', function() {
    
    document.querySelector('.activities-page').style.display = 'none';
    
    document.querySelector('.empty-notification').style.display = 'flex';

    document.querySelector('.empty-notification').style.opacity = 1;
    document.querySelector('.empty-notification').style.animation = 'none';
});

// Delete activities button
document.querySelector(".delete-active").addEventListener("click", ()=>{
    document.querySelector(".activities-page").style.display = "none";
    document.querySelector(".empty-notification").style.display = "flex";
})
document.querySelector('.delete-active').addEventListener('click', function() {
    
    document.querySelector('.activities-page').style.display = 'none';
    
    document.querySelector('.empty-notification').style.display = 'flex';

    document.querySelector('.empty-notification').style.opacity = 1;
    document.querySelector('.empty-notification').style.animation = 'none';
});

// New Notification page
document.querySelectorAll('#new-notif').forEach(h5 => {
    h5.addEventListener('click', () => {
        document.querySelector('.empty-notification').style.display = 'none';
        document.querySelector('.activities-page').style.display = 'none';
        
        document.querySelector('.new-notif-page').style.display = 'flex';
        document.querySelector('.new-notif-page').style.animation = 'none';
    });
});

// Activities page
document.querySelectorAll('#activities').forEach(h5 => {
    h5.addEventListener('click', () => {
        document.querySelector('.empty-notification').style.display = 'none';
        document.querySelector('.new-notif-page').style.display = 'none';
        
        document.querySelector('.activities-page').style.display = 'flex';
        document.querySelector('.activities-page').style.animation = 'none';
    });
});