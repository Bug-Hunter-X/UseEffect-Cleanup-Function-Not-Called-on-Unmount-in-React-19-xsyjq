# React 19 useEffect Cleanup Issue

This repository demonstrates a potential issue with the useEffect cleanup function in React 19 where it may not be called when a component is unmounted under certain conditions.  The provided example shows how to reproduce the problem and a possible solution.

## Problem

The problem arises when a component has an effect with an empty dependency array `[]` which is designed to run only once.  While this runs correctly, the cleanup function is not always called when the component is unmounted before the next render. This can lead to memory leaks or unexpected behavior.

## Solution

The solution typically involves ensuring that any resources acquired within the effect are properly released in the cleanup function and that it's called appropriately in various scenarios (e.g., using a `useRef` to track component's lifecycle).