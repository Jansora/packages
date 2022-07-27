package com.jansora.app.infrastructure.dto;


import java.io.Serializable;


public class LogoDto implements Serializable {


    private String name;

    private String logo;


    public LogoDto(String name, String logo) {
        this.name = name;
        this.logo = logo;
    }

    public LogoDto() {
    }

    public String getName() {
        return this.name;
    }

    public String getLogo() {
        return this.logo;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public boolean equals(final Object o) {
        if (o == this) return true;
        if (!(o instanceof LogoDto)) return false;
        final LogoDto other = (LogoDto) o;
        if (!other.canEqual((Object) this)) return false;
        final Object this$title = this.getName();
        final Object other$title = other.getName();
        if (this$title == null ? other$title != null : !this$title.equals(other$title)) return false;
        final Object this$logo = this.getLogo();
        final Object other$logo = other.getLogo();
        if (this$logo == null ? other$logo != null : !this$logo.equals(other$logo)) return false;
        return true;
    }

    protected boolean canEqual(final Object other) {
        return other instanceof LogoDto;
    }

    public int hashCode() {
        final int PRIME = 59;
        int result = 1;
        final Object $title = this.getName();
        result = result * PRIME + ($title == null ? 43 : $title.hashCode());
        final Object $logo = this.getLogo();
        result = result * PRIME + ($logo == null ? 43 : $logo.hashCode());
        return result;
    }

    public String toString() {
        return "LogoDto(title=" + this.getName() + ", logo=" + this.getLogo() + ")";
    }
}
