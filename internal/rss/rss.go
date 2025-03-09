package rss

import (
	"encoding/xml"
	"time"
)

type Rss struct {
	XMLName     xml.Name  `xml:"rss"`
	Version     string    `xml:"version,attr"`
	Title       string    `xml:"channel>title"`
	Description string    `xml:"channel>description"`
	Link        string    `xml:"channel>link"`
	PubDate     string    `xml:"channel>pubDate"`
	Items       []RssItem `xml:"channel>item"`
}

type Description struct {
	XMLName xml.Name `xml:"description"`
	Text    string   `xml:",cdata"`
}

type RssItem struct {
	Title       string      `xml:"title"`
	Description Description `xml:"description"`
	Link        string      `xml:"link"`
	PubDate     string      `xml:"pubDate"`
}

func NewRSS(title string, description string, pubDate time.Time, items []RssItem) Rss {
	return Rss{
		Version:     "2.0",
		Title:       title,
		Description: description,
		Link:        "https://console.dev",
		PubDate:     pubDate.Format(time.RFC1123Z),
		Items:       items,
	}
}
