window.onload = function() {
    // 미팅 전체 목록 가져오기
    axios.get('http://54.248.217.183/quickmatch/list/')
        .then(response => populateMeetingList(response.data))
        .catch(error => console.error('Error fetching meetings:', error));

    // 검색 버튼에 이벤트 리스너 추가
    document.getElementById('searchBtn').addEventListener('click', function() {
        const searchTerm = document.getElementById('searchInput').value;
        axios.get('http://54.248.217.183/quickmatch/search/', { params: { search: searchTerm } })
            .then(response => populateMeetingList(response.data))
            .catch(error => console.error('Error fetching meetings:', error));
    });
}

function populateMeetingList(data) {
    const meetingList = document.getElementById('meetingList');
    meetingList.innerHTML = '';  // 기존 목록을 초기화합니다.
    data.forEach(meeting => {
        const meetingItem = document.createElement('div');
        meetingItem.className = 'meeting-item';

        const title = document.createElement('h2');
        title.textContent = meeting.title;

        const description = document.createElement('p');
        description.textContent = meeting.description;

        const joinBtn = document.createElement('button');
        joinBtn.className = 'join-btn';
        joinBtn.textContent = '참석하기';
        joinBtn.onclick = function() {
            // 참석 로직 구현
        }

        const leaveBtn = document.createElement('button');
        leaveBtn.className = 'leave-btn';
        leaveBtn.textContent = '떠나기';
        leaveBtn.onclick = function() {
            // 떠나기 로직 구현
        }

        meetingItem.appendChild(title);
        meetingItem.appendChild(description);
        meetingItem.appendChild(joinBtn);
        meetingItem.appendChild(leaveBtn);

        meetingList.appendChild(meetingItem);
    });
}