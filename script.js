document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const hasSubmenus = document.querySelectorAll('.has-submenu');

    // Toggle sidebar visibility
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            document.querySelector('.main-content').classList.toggle('expanded');
        });
    }

    // Toggle submenus
    hasSubmenus.forEach(item => {
        item.addEventListener('click', (e) => {
            // Prevent default link behavior if it's just a toggle
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                 e.preventDefault(); // Prevent page navigation if it's a submenu parent link
            }

            // Toggle 'open' class on the parent li
            item.classList.toggle('open');
            const submenu = item.querySelector('.submenu');
            if (submenu) {
                submenu.classList.toggle('open');
            }
        });
    });

    // Basic calendar interaction (for demonstration)
    const calendarViews = document.querySelectorAll('.btn-calendar-view');
    calendarViews.forEach(btn => {
        btn.addEventListener('click', () => {
            calendarViews.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // In a real application, this would switch calendar views (month, week, day, list)
            console.log(`Switched to ${btn.textContent} view`);
        });
    });

    // Simulate clicking on the "Today" button
    const todayButton = document.querySelector('.btn-today');
    if (todayButton) {
        todayButton.addEventListener('click', () => {
            console.log('Navigated to Today\'s date');
            // Logic to update calendar to current date
        });
    }

    // Example: Highlight current day (simple demonstration)
    const today = new Date();
    const currentDay = today.getDate();
    const calendarDays = document.querySelectorAll('.calendar-day');

    calendarDays.forEach(day => {
        // This is a simplistic check; a real calendar would parse month/year data
        if (parseInt(day.textContent) === currentDay && !day.classList.contains('calendar-day-header')) {
            day.classList.add('active-day');
        }
    });

    // Add specific event highlights based on image 4
    // This is hardcoded for demonstration purposes. In a real app, this data would come from backend.
    const calendarDay9 = document.querySelector('.calendar-grid .calendar-day:nth-child(10)'); // Day 9
    if (calendarDay9 && calendarDay9.textContent.trim() === '9') {
        calendarDay9.innerHTML += `<div class="event-indicator blue-event">بيئه تعليميه جديده</div>`;
        calendarDay9.innerHTML += `<div class="event-indicator blue-event">+5 more</div>`;
    }

    const calendarDay15 = document.querySelector('.calendar-grid .calendar-day:nth-child(16)'); // Day 15
    if (calendarDay15 && calendarDay15.textContent.trim() === '15') {
        calendarDay15.innerHTML += `<div class="event-indicator purple-event">سجل المكالمات الشاشي</div>`;
        calendarDay15.innerHTML += `<div class="event-indicator purple-event">سجل المكالمات الشاشي</div>`;
    }

    const calendarDay17 = document.querySelector('.calendar-grid .calendar-day:nth-child(18)'); // Day 17
    if (calendarDay17 && calendarDay17.textContent.trim() === '17') {
        calendarDay17.classList.add('has-event', 'purple'); // Add a class for background color
        calendarDay17.style.backgroundColor = '#9b59b6'; // Directly set background for demonstration
        calendarDay17.style.color = 'white';
        // Add content like "17" if not already present
        if (!calendarDay17.querySelector('.day-number')) {
            calendarDay17.innerHTML = `<span class="day-number" style="font-weight: bold; font-size: 1.5em;">17</span>` + calendarDay17.innerHTML;
        }
    }
});

