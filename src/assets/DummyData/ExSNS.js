const ExSNS = [
    {
        userId: 1,
        userName: "John",
        userProfileImg: require("../../assets/img/profile1.png"),
        userText: "오늘은 데이터베이스 설계를 공부했다. 정규화를 통해 데이터 중복을 최소화하고 더 효율적인 테이블 구조를 설계하는 법을 배웠다. 특히 3NF까지 정규화를 하는 것이 중요하다는 것을 알게 되었다.\n" +
            "다음 주에는 인덱스와 성능 최적화에 대해 더 깊이 공부할 예정이다.",
        userImages: [
            require("../../assets/img/Post1.png"),
            require("../../assets/img/Post2.png")
        ],
        userLikes: 24,
        isFollow: true,
    },
    {
        userId: 2,
        userName: "Amy",
        userProfileImg: require("../../assets/img/profile55.png"),
        userText: "오늘은 스레드에 대해 공부했다. 사용자 레벨 스레드는 스레드 스위칭에 커널의 개입이 필요 없어서 성능이 더 좋을 때도 있지만, 특정 스레드가 대기 상태에 들어가면 다른 스레드까지 영향을 받을 수 있는 단점이 있었다.\n" +
            "마지막으로 스레드랑 프로세스의 차이도 봤는데, 스레드는 메모리를 공유하고 프로세스는 독립적인 공간을 쓴다고 한다. 헷갈리지 않게 자주 복습해야 할 것 같다."+
        "마지막으로 스레드랑 프로세스의 차이도 봤는데, 스레드는 메모리를 공유하고 프로세스는 독립적인 공간을 쓴다고 한다. 헷갈리지 않게 자주 복습해야 할 것 같다."+
            "마지막으로 스레드랑 프로세스의 차이도 봤는데, 스레드는 메모리를 공유하고 프로세스는 독립적인 공간을 쓴다고 한다. 헷갈리지 않게 자주 복습해야 할 것 같다."+
            "마지막으로 스레드랑 프로세스의 차이도 봤는데, 스레드는 메모리를 공유하고 프로세스는 독립적인 공간을 쓴다고 한다. 헷갈리지 않게 자주 복습해야 할 것 같다."+
            "마지막으로 스레드랑 프로세스의 차이도 봤는데, 스레드는 메모리를 공유하고 프로세스는 독립적인 공간을 쓴다고 한다. 헷갈리지 않게 자주 복습해야 할 것 같다."+
            "마지막으로 스레드랑 프로세스의 차이도 봤는데, 스레드는 메모리를 공유하고 프로세스는 독립적인 공간을 쓴다고 한다. 헷갈리지 않게 자주 복습해야 할 것 같다."+
            "마지막으로 스레드랑 프로세스의 차이도 봤는데, 스레드는 메모리를 공유하고 프로세스는 독립적인 공간을 쓴다고 한다. 헷갈리지 않게 자주 복습해야 할 것 같다."+
            "마지막으로 스레드랑 프로세스의 차이도 봤는데, 스레드는 메모리를 공유하고 프로세스는 독립적인 공간을 쓴다고 한다. 헷갈리지 않게 자주 복습해야 할 것 같다.",

        userImages: [
            require("../../assets/img/Post2.png"),
            require("../../assets/img/Post2.png"),
            require("../../assets/img/Post1.png")
        ],
        userLikes: 16,
        isFollow: false,
    },
    {
        userId: 3,
        userName: "Liam",
        userProfileImg: require("../../assets/img/profile2.png"),
        userText: "React Native에서의 상태 관리를 공부했다. Recoil과 Redux의 차이점과 각각의 장단점을 비교해보니, 프로젝트의 규모에 따라 적합한 상태 관리 라이브러리를 선택하는 것이 중요하다는 것을 느꼈다.",
        userImages: [
            require("../../assets/img/Post1.png"),
            require("../../assets/img/Post2.png")
        ],
        userLikes: 45,
        isFollow: true,
    },
    {
        userId: 4,
        userName: "Sophia",
        userProfileImg: require("../../assets/img/profile33.png"),
        userText: "오늘은 머신러닝 모델의 하이퍼파라미터 튜닝에 대해 배웠다. Grid Search와 Random Search를 사용하는 방법을 알게 되었고, 각 방법의 효율성을 비교하며 실제 데이터를 활용해 실습해봤다.",
        userImages: [
            require("../../assets/img/Post1.png"),
            require("../../assets/img/Post1.png"),
            require("../../assets/img/Post2.png")
        ],
        userLikes: 32,
        isFollow: false,
    },
    {
        userId: 5,
        userName: "Ethan",
        userProfileImg: require("../../assets/img/profile44.png"),
        userText: "네트워크 프로그래밍에 대해 공부했다. 소켓 프로그래밍의 기본 개념과 TCP/UDP 프로토콜의 차이점에 대해 알게 되었고, 간단한 채팅 애플리케이션을 구현해보았다.",
        userImages: [
           require("../../assets/img/Post1.png"),
            require("../../assets/img/Post2.png")
        ],
        userLikes: 12,
        isFollow: true,
    }
];

export default ExSNS;
