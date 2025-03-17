@echo off
setlocal enabledelayedexpansion

REM Get the current date in YYYY/MM/DD format
for /f "tokens=2 delims==" %%A in ('wmic os get localdatetime /value') do set "datetime=%%A"
set "formattedDate=%datetime:~0,4%/%datetime:~4,2%/%datetime:~6,2%"

REM Check if the correct number of arguments are provided
if "%~4"=="" (
    echo Usage: %~nx0 [Kyu] [FolderName] [KataID] [Description]
    echo Example: %~nx0 6 CountChars 52efefcbcdf57161d4000091 Count characters in your string
    exit /b 1
)

REM Assign arguments to variables
set "kyu=%~1"
set "folderName=%~2"
set "kataID=%~3"
REM Combine all arguments after KataID into the description
set "description="
shift
shift
shift
:append_description
if not "%~1"=="" (
    if defined description (
        set "description=%description% %~1"
    ) else (
        set "description=%~1"
    )
    shift
    goto append_description
)

REM Create the folder and copy files from .\blank\
mkdir "%folderName%"
REM xcopy ".\blank\*" "%folderName%\" /E /H /C /I /Q /Y
copy ".\blank\blank.README.md" "%folderName%\README.md"
copy ".\blank\blank.solution.js" "%folderName%\solution.js"

REM Replace placeholders in the files
for %%f in ("%folderName%\README.md", "%folderName%\solution.js") do (
    (
        REM Read the file while preserving blank lines
        for /f "tokens=1,* delims=:" %%a in ('findstr /n "^" "%%f"') do (
            set "line=%%b"
            if defined line (
                set "line=!line:{KYU}=%kyu%!"
                set "line=!line:{KATAID}=%kataID%!"
                set "line=!line:{DESCRIPTION}=%description%!"
                set "line=!line:{DATE}=%formattedDate%!"
                echo(!line!
            ) else (
                echo.
            )
        )
    ) > "%%f.tmp"
    move /y "%%f.tmp" "%%f" >nul
)

echo Folder "%folderName%" created and files updated successfully.