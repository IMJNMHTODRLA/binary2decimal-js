@echo off
setlocal enabledelayedexpansion

:: 사용자에게 버전 입력받기
echo ========================================
echo 
set /p VERSION=버전을 입력하세요: 

echo 입력한 버전: %VERSION%
echo npm publish 실행 중...

npm publish

if errorlevel 1 (
    echo ========================================
    echo 
    echo 
    echo 퍼블리시 실패!
    echo 
    echo 
    echo ========================================
) else (
    echo ========================================
    echo 
    echo 
    echo 퍼블리시 성공!
    echo 
    echo 
    echo ========================================
)
