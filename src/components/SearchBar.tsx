"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <form className="search-bar" role="search" onSubmit={(event) => event.preventDefault()}>
      <label className="sr-only" htmlFor="service-search">搜索风水命理服务</label>
      <Search className="search-bar__icon" size={21} aria-hidden="true" />
      <input
        id="service-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="搜索服务，如：八字、择日、家居风水"
        autoComplete="off"
      />
      <button type="submit" aria-label="搜索服务">
        <Search className="search-bar__button-icon" size={18} aria-hidden="true" />
        <span>搜索</span>
      </button>
    </form>
  );
}
