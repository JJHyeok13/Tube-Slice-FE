import Profile from '@assets/boardDetailPage/profile.svg';

export const postData = {
  title: '꽁꽁 얼어붙은 한강위로...',
  nickname: '눈꽃',
  content:
    '꽁꽁 얼어붙은 한강 위로 고양이가 걸어다닙니다. 꽁꽁 얼어붙은 고양이가 한강 위로 걸어다닙니다. 꽁꽁 얼어붙은 한강 위로 고양이 고양이다. 꽁꽁 얼어붙은 한강 위로 고양이가 걸어다닙니다. 꽁꽁 얼어붙은 고양이가 한강 위로 걸어다닙니다. 꽁꽁 얼어붙은 한강 위로 고양이 고양이다. 꽁꽁 얼어붙은 한강 위로 고양이가 걸어다닙니다. 꽁꽁 얼어붙은 고양이가 한강 위로 걸어다닙니다. 꽁꽁 얼어붙은 한강 위로 고양이 고양이다.',
  videoUrl: '',
  keywords: ['정치', '경제'],
  commentNum: 5,
  isMine: true,
  isLike: false,
  isFollowing: false,
};

export const commentData = [
  {
    commentId: 1,
    userId: 1,
    profileUrl: '',
    nickname: '웡카',
    content:
      'I am 댓글이에요 I am 댓글이에요 I am 댓글이에요 I am 댓글이에요 I am 댓글이에요 I am 댓글이에요',
    createdAt: '3분 전',
    isMine: false,
  },
  {
    commentId: 2,
    userId: 2,
    profileUrl: Profile,
    nickname: '눈꽃',
    content:
      'I am 댓글이에요 I am 댓글이에요 I am 댓글이에요 I am 댓글이에요 I am 댓글이에요 I am 댓글이에요',
    createdAt: '3분 전',
    isMine: true,
  },
];
