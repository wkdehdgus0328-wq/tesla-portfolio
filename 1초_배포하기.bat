@echo off
chcp 65001 > nul
echo ===================================================
echo   테슬라 포트폴리오 GitHub 자동 배포 (1초 업데이트)
echo ===================================================
echo.
echo 변경된 내용을 깃허브로 전송하고 있습니다...
echo.

:: 현재 스크립트가 실행되는 폴더로 이동
cd /d "%~dp0"

:: 모든 변경 사항(추가/수정/삭제)을 깃에 추가
git add .

:: 날짜와 시간을 포함하여 커밋
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set yyyy=%datetime:~0,4%
set mm=%datetime:~4,2%
set dd=%datetime:~6,2%
set hh=%datetime:~8,2%
set mi=%datetime:~10,2%

git commit -m "포트폴리오 내용 업데이트 (%yyyy%-%mm%-%dd% %hh%:%mi%)"

:: 깃허브로 푸시 (업로드)
git push origin main

echo.
echo ===================================================
echo 배포 완료! 🚀
echo 방금 수정한 내용이 깃허브에 성공적으로 업로드되었습니다.
echo 라이브 URL(웹사이트)에는 약 1~2분 뒤에 자동으로 반영됩니다.
echo ===================================================
echo.
pause
