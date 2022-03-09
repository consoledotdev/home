---
title: "The Best Container Monitoring Tools For Developers - Console"
titlePrefix: "The best"
titleCategory: "container monitoring"
titleSuffix: "tools for developers"
date: 2022-03-08T12:00:00+00:00
draft: false
summary:
  "The best container monitoring tools for developers: Datadog, Elasticsearch,
  Grafana, Dynatrace, Sematext, and Sumo Logic. 10 container monitoring tools
  reviewed."
metaDescription:
  "The best container monitoring tools for developers: Datadog, Elasticsearch,
  Grafana, Dynatrace, Sematext, and Sumo Logic. 10 container monitoring tools
  reviewed."
headerType: fixed
hideLines: true
hidePlanes: true
type: category-review
layout: category-review
isPage: container-monitoring
customStyle: true
pageType: category-review
customPageStyle: true
xlViewport:
  largeText: true
category: developer-tools
subcategory: container-monitoring
authorName: Naman Singhal
authorImg: /img/naman.jpg
authorBioBrief:
  Naman has a background in computer science and has published research with
  IEEE on predicting software bugs using machine learning models.
authorBio:
  is a technical writer at Console. He has a background in computer science and
  recently published research into machine learning predictions of software
  quality at the International Conference on Advanced Computing and
  Communication Systems.
aliases:
  - /tools/container-monitoring/
---

The best container monitoring tools collect various metrics from both containers
and their hosts, integrate well with existing services to expand their
functionality and present visualized metrics data and easy to search logs.

We tested 10 container monitoring tools using our independent
[selection criteria](https://console.dev/selection-criteria/) and the
requirements described below. The best container monitoring tools for developers
in {{< year >}} are:

1. [Datadog](#datadog)
2. [Elasticsearch, Logstash, and Kibana](#ELK-stack)
3. [Grafana + cAdvisor + Prometheus](#grafana)
4. [Dynatrace](#dynatrace)
5. [Sematext](#sematext)
6. [Sumo Logic](#sumo-logic)

In this review, we consider the best container monitoring tools for developers.
In several cases there is overlap with [server monitoring](/server-monitoring/)
functionality where the newer generation of monitoring tools have adapted to or
been built with containers in mind. In other cases, specialist container
monitoring products have been considered.

Traditional server monitoring applications do not work well for monitoring
containers because the model of long-running servers or VMs is flipped to one
where there can be potentially thousands of containers started and stopped over
a short time period. Each host can run many containers, each one typically
running a single process, utilizing virtual networks and with different methods
of managing storage.

Traditional servers also have very long uptimes, but containers have a short
lifetime and are stateless, i.e. once stopped, a container does not retain any
information of previous execution. Traditional monitoring tools are not suited
for monitoring such deployments.

{{< nav-wrapper--open id="wrapper-0" anchor-name="tldr" >}}

### tl;dr the best code collaboration tools

{{< category-review/tldr-list--open >}}
{{< category-review/miniature-card name="Datadog" thumbnail="/img/favicons/www.datadoghq.com.png" url="https://www.datadog.com/" anchor="datadog" score="5" >}}
{{< category-review/miniature-card name="Elasticsearch, Logstash, Kibana" thumbnail="/img/favicons/www.elastic.co.png" url="https://www.elastic.co/elastic-stack/" anchor="ELK-stack" score="4.8" >}}
{{< category-review/miniature-card name="Grafana + cAdvisor + Prometheus" thumbnail="/img/favicons/grafana.com.png" url="https://grafana.com/" anchor="grafana" score="4.2" >}}
{{< category-review/miniature-card name="Dynatrace" thumbnail="/img/favicons/www.dynatrace.com.png" url="https://www.dynatrace.com/" anchor="dynatrace" score="3.5" >}}
{{< category-review/miniature-card name="Sematext" thumbnail="/img/favicons/sematext.com.svg" url="https://sematext.com/container-monitoring/" anchor="sematext" score="3.3" >}}
{{< category-review/miniature-card name="Sumo Logic" thumbnail="/img/favicons/www.sumologic.com.jpg" url="https://www.sumologic.com" anchor="sumo-logic" score="2.5" >}}
{{< ul--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-1" anchor-name="requirements-above" >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-3 icon="checklist" id="requirements" >}} Requirements
{{</ rich-title-3 >}}

The three most important features every container monitoring tool must have are
the number of metrics monitored, integrations/plugins available, the ability to
present collected data via charts and log traces. Other features might be useful
to improve the product experience, but modern container monitoring tools in
{{< year >}} must have these three.

For each of our container monitoring tool reviews we will assess functionality
based on our [standard selection criteria](/selection-criteria/) plus these
three requirements:

{{< framed-section-item--open >}}

#### Metrics monitored

Every monitoring tool should collect basic stats on the host system like CPU
usage, network usage, idle memory, etc. Additional stats should be available for
the container daemon itself as well as using it to introspect the running
containers to report their lifetime, resource usage and crash frequency.

{{< div--close >}}

{{< framed-section-item--open >}}

#### Integrations/plugins

The best container monitoring tools should integrate well with existing
technologies and services. The quality of plugins is as important as quantity,
which is often a problem with community-written integrations. The best tools
should also integrate with popular communication platforms to send alert
notifications, such as incident management tools like PagerDuty. Enterprise
users should be able to use single-sign-on.

{{< div--close >}}

{{< framed-section-item--open classes="flat-lists" >}}

#### Charts and log traces

Modern container monitoring tools should support multiple log formats and should
be able to derive meaningful insights from them. The best tools should be able
to detect and correlate metrics, often with advanced features like anomaly
detection of unusual behaviour. Data should be presented using graphs and
visualizations that include sophisticated capabilities such as filtering, trend
analysis and annotation.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

### Best code collaboration tools

We reviewed 10 container monitoring tools. The best is: Datadog. We also liked
[Elasticsearch, Logstash, and Kibana](#ELK-stack) and
[Grafana + cAdvisor + Prometheus](#grafana).

{{< nav-wrapper--open id="wrapper-2" anchor-name="datadog" >}}

{{< category-review/card--open >}}

{{< category-review/card-top--open >}}

{{< category-review/card-heading name="Datadog" anchor="datadog" thumbnail="/img/favicons/www.datadoghq.com.png" url="https://www.datadoghq.com/" score="5" >}}

Datadog is the leader to beat - we rated it highly in our
[server monitoring tools review](/server-monitoring/) and it has many of the
same benefits in this review of its container monitoring capabilities. It offers
an extensive set of integrations and features which makes it powerful, but that
comes at the real cost of a high price, and a cost in terms of complexity and
ease of use.

{{< img-center src="/img/container-monitoring/datadog.png" alt="Datadog product screenshot" width="100%" >}}

{{< div--close >}}

{{< category-review/card-bottom--open >}}

{{< category-review/card-cost--open highlight="Datadog charges $15 (max 10 containers) and $23 (max 20 containers) per host, per month. Each additional container beyond this limit is charged at either $0.002 per container per hour, or prepaid at $1 per container per month. Log processing and retention are priced separately, starting at $0.10 per GB per month" >}}

{{< div--close >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Metrics monitored" score="5" >}}

The Docker agent for Datadog collects useful host system metrics such as the
percent of time the CPU spent running the virtual processor (only applies to
hypervisors), percent of time the CPU spent in an idle state, percentage of time
the processor is spending on handling Interrupts, etc. Some metrics, which are
specific to a certain OS, such as the number of processes (Windows only) and the
average system load over one minute (Linux only) can also be reported.

Useful metrics about resources used by the Docker agent (CPU, memory, storage,
and network) and metadata about containers is also available. Custom metrics can
be collected via
[DogStatsD](https://docs.datadoghq.com/developers/dogstatsd/?tab=hostagent) - an
implementation of [StatsD](https://github.com/statsd/statsd) protocol, which
uses UDP to send data to Datadog. These custom metrics are subject to a limit of
100 or 200 per host, depending on the pricing plan.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Integrations/plugins" score="5" >}}

Datadog works with popular cloud based container services like Amazon Elastic
Kubernetes Service, [Ambassador](https://www.getambassador.io/), Azure Container
Instances, Google Kubernetes Engine, Red Hat OpenShift,
[containerd](https://containerd.io/), and many more. Communication and messaging
applications like PagerDuty, Slack, Microsoft Teams, etc. can be integrated to
send notifications and raise alerts. Datadog also allows users to create
[custom integrations](https://docs.datadoghq.com/developers/integrations/new_check_howto/?tab=configurationtemplate)
using Python.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Charts and log traces" score="5" >}}

Datadog supports creating custom dashboards with various charts and graphs to
visualize metrics. The logs can be filtered by multiple selection criteria such
as status levels, container name, image name, service, host, source, etc. The
logs dashboard shows queries in an infographic format which makes it easy to
understand. The results of the query can be refined by adding subsequent queries
and can be viewed as a list, time series, or a table. Logs can be exported as
CSV files and downloaded via curl commands.

{{< div--close >}}

{{< div--close >}}

{{< category-review/card-like--open >}}

Datadog is easy to install and setup - the agent can be installed with one
Docker command. This agent collects metrics, logs and events, and automatically
uploads them to Datadog running in the cloud - no special configuration is
required to receive data. The quick setup process makes it easy to install it on
a large number of devices.

Datadog has advanced monitoring capabilities - it supports monitoring detailed
metrics like the median value of docker container memory in use or 95th
percentile score of IO bytes written. Common sources of problems, such as clock
skew (the time difference between the local clock and the NTP reference clock)
can also be monitored. There are also useful data leak prevention features - it
is possible to limit the data collected by
[excluding/including certain containers](https://docs.datadoghq.com/agent/guide/autodiscovery-management/)
from being monitored. In addition to Docker, Datadog agent also supports the
[Containerd](https://docs.datadoghq.com/integrations/containerd/?tab=linuxcontainer)
container runtime. These all fit in nicely with the server monitoring
functionality, which
[we reviewed separately](https://console.dev/server-monitoring/#datadog) but is
part of the same "Infrastructure" product.

Datadog has a prebuilt dashboard for Docker which gives an overview of resource
usage (network, CPU, memory, and I/O) on different hosts, this dashboard can not
be edited, however, it can be cloned and changes can be made to duplicate.
Advanced charts can be built by refining scope and using functions (such as min,
max, sum, avg). Multiple queries can be aggregated to view several metrics on
the same chart, for example, a number of bytes received and sent, amount of
memory idle and used by a container, etc. The axes labels, legend and title of
the chart can be customized and events can be overlayed onto charts - this makes
it easy to correlate unexpected results with possible causes.

Datadog logs events like kill, die, stop, start, and restart of containers plus
with the host running those containers. A special event is logged when the
logging agent itself is restarted. Events are
[tagged](https://docs.datadoghq.com/agent/docker/tag/) with indicators like
container ID, host names, container name, docker image, etc. which makes them
easy to sort through.

{{< div--close >}}

{{< category-review/card-dislike--open >}}

Datadog’s pricing is complex. Users are charged for monitoring the host running
the Docker engine as well as individual containers past the free limit of 10 or
20 containers (depending upon the host license). Furthermore, log ingestion and
retention is billed in different units - log ingestion and indexing is priced at
$0.10/GB (it is waived if all the logs sent to Datadog are already indexed) and
log retention is billed per million log events per month. This makes it
difficult to predict charges.

One thing we found annoying was having to download the same Docker image
multiple times. Datadog stores container images in multiple cloud repositories,
the documentation is inconsistent and uses the images interchangeably, this
means copy and pasting the commands downloads an identical image from a
different source.

We also found Datadog’s Docker agent to be resource-intensive. It consistently
consumed more than 235 MiB memory which is greater than other container
monitoring tools like cAdvisor (42 MiB) and Sematext (101 MiB).

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-3" anchor-name="ELK-stack" >}}

{{< category-review/card--open >}}

{{< category-review/card-top--open >}}

{{< category-review/card-heading name="Elasticsearch, Logstash, and Kibana (ELK Sack)" anchor="ELK-stack" thumbnail="/img/favicons/www.elastic.co.png" url="https://www.elastic.co/elastic-stack/" score="4.8" >}}

ELK stack consists of three open source projects: Elasticsearch, Logstash, and
Kibana. Elasticsearch is a search and analytics engine. Logstash is a data
processing pipeline that ingests data from multiple sources and then sends it to
a "stash" like Elasticsearch. Kibana is used for visualizing data with charts
and graphs in Elasticsearch.

{{< img-center src="/img/container-monitoring/elastic.png" alt="Elasticsearch product screenshot" width="100%" >}}

{{< div--close >}}

{{< category-review/card-bottom--open >}}

{{< category-review/card-cost--open highlight="Elastic Stack is free and open source if you want to self-host it. A subscription for Elastic Cloud, a SaaS service, starts at $16/month for a standard license and $30/month for an enterprise license." >}}

{{< div--close >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Metrics monitored" score="5" >}}

There are two ways to send data to Elasticsearch - using Beats, which are
lightweight data shippers, or Elastic Agent, a single agent for logs, metrics,
security data, and threat prevention. Beats and Elastic Agent can both send data
directly to Elasticsearch or via Logstash.

Metricbeat directly reads the cgroups information from the proc file system,
which allows it to get statistics about every container running on the system
without requiring root privileges. Even when interruptions such as network
issues occur, Metricbeat holds onto incoming data and then ships those metrics
to Elasticsearch or Logstash when things are back online.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Integrations/plugins" score="4.5" >}}

Logstash has dozens of input plugins that enables it to read events and logs
from many sources - Azure Event Hubs, Elastic Beats framework, AWS CloudWatch
API, Google Cloud PubSub service and more.

Kibana has many community-supported
[plugins](https://www.elastic.co/guide/en/kibana/current/kibana-plugins.html)
that enhance its functionality. Plugins to make
[3D charts](https://github.com/virusu/3D_kibana_charts_vis),
[3D graphs](https://github.com/JuanCarniglia/area3d_vis) and
[VR visualizations](https://github.com/Camichan/kbn_aframe) particularly stood
out from the rest. How useful VR visualizations are in practice is a separate
question.

Elasticsearch has plugins for adding custom mapping types, custom analyzers,
native scripts, custom discovery and more. Some plugins are maintained by the
Elastic team and others are provided by individual developers or private
companies. Users can also
[develop their own plugins](https://www.elastic.co/guide/en/elasticsearch/plugins/7.17/plugin-authors.html).

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Charts and log traces" score="5" >}}

Logs can be filtered by
[Kibana Query Language](https://www.elastic.co/guide/en/kibana/7.17/kuery-query.html)
(KQL). It suggests field names, values, and operators as you type which makes
the whole process easier. Kibana works with all types of data - you can use
structured or unstructured text, numerical data, time-series data, geospatial
data, logs, metrics, security events to make charts, gauges, maps, graphs, and
more, and combine them in a dashboard.

{{< div--close >}}

{{< div--close >}}

{{< category-review/card-like--open >}}

[Elasticsearch](https://www.elastic.co/elasticsearch/) is a multi-purpose
distributed document store and analytics engine. It stores complex data
structures in a serialized JSON format as opposed to rows of columnar data. It
uses an inverted index to store data and can be scaled horizontally to hundreds
of nodes which allows it to perform fast full-text searches even under high
operational workloads. It is possible to use
[Machine Learning](https://www.elastic.co/what-is/elasticsearch-machine-learning)
to automatically detect anomalous log entry rates and categorize log messages.

[Metricbeat](https://www.elastic.co/beats/metricbeat) can collect metrics about
the system and the Docker daemon like CPU usage, memory, file system, disk IO,
and network IO statistics, as well as statistics for every process running on
all your Linux, Windows, and Mac hosts. It also works with other runtimes like
[rkt](https://github.com/rkt/rkt/) and
[runc](https://github.com/opencontainers/runc). Metricbeat forwards data to
[Logstash](https://www.elastic.co/logstash/), a data processing pipeline that
can perform data transformations like deriving structure from unstructured data
with grok, deciphering geo-coordinates from IP addresses, anonymizing or
excluding sensitive fields and ship it to Elasticsearch. It is also possible to
ship data directly to Elasticsearch.

[Kibana](https://www.elastic.co/kibana/) is a user interface that interacts with
Elasticsearch. In addition to basic data visualizations like histograms, line
graphs, pie charts and subursts. It also supports building
[graph networks](https://www.elastic.co/what-is/elasticsearch-graph) and
performing [location analysis](https://www.elastic.co/maps) - this makes it
possible to analyze the relationships in data by overlaying them over maps in
real-time. [Canvas](https://www.elastic.co/what-is/kibana-canvas) is a flexible
dashboarding tool that enables you to use custom color palettes, CSS elements,
and assets to present Elasticsearch data in a visually appealing format.

Kibana offers Kibana Query Language (KQL), a syntax for filtering data from
Elasticsearch. It is also possible to use
[Lucene query syntax](https://www.elastic.co/guide/en/kibana/7.17/lucene-query.html)
which offers advanced features such as regular expressions or fuzzy term
matching, both of which are unsupported by KQL.

Large organizations can benefit from role-based access privileges that grant
permissions to view an application or perform a specific action and are assigned
to roles. For example, power users might have privileges to create and edit
visualizations and dashboards, while analysts or executives might have Dashboard
and Canvas with read-only privileges.

{{< div--close >}}

{{< category-review/card-dislike--open >}}

Elasticsearch is a general purpose data storage tool that requires devops
expertise to configure and scale up. Running an ELK stack deployment on a large
scale is a massive undertaking and requires continuous effort to keep it
running, update regularly and monitor the stack itself. Furthermore,
Elasticsearch is not ACID-compliant - this might lead to some inconsistencies in
logs which could be hard to detect if retaining all log entries is important.

There is no standard query language, multiple languages are supported
simultaneously -
[Elasticsearch SQL](https://www.elastic.co/what-is/elasticsearch-sql),
[Query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html),
[Kibana Query Language](https://www.elastic.co/guide/en/kibana/7.17/kuery-query.html),
and
[Lucene query syntax](https://www.elastic.co/guide/en/kibana/7.17/lucene-query.html).
Having multiple languages causes confusion and makes it difficult to remember
syntax and supported features for each one of them. For example, KQL does not
support regular expressions or searching with fuzzy terms. To use those, the
user has to switch to legacy Lucene syntax by turning off KQL. Lucene syntax is
not able to search nested objects or scripted fields that are supported by KQL.

We noticed that the Kibana
[plugins](https://www.elastic.co/guide/en/kibana/current/kibana-plugins.html)
are in a state of constant development. Plugin developers develop plugins
independently of Kibana releases and do not guarantee compatibility across
versions. This might deter developers from upgrading the system to prevent
breaking changes.

When monitoring other container runtimes, some metadata like container name is
not available - the user has to rely upon the cgroup ID which can be correlated
with logs to detect problems. We do not recommend ELK stack to novice users or
small businesses who will be unlikely to take advantage of its open source
license by building custom plugins and modules. If you have a standard use-case
that can be satisfied without of the box tools, then other tools in this review
are a better alternative.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-4" anchor-name="grafana" >}}

{{< category-review/card--open >}}

{{< category-review/card-top--open >}}

{{< category-review/card-heading name="Grafana + cAdvisor + Prometheus" anchor="grafana" thumbnail="/img/favicons/grafana.com.png" url="https://grafana.com/" score="4.2" >}}

Grafana is an excellent open source metrics visualization and dashboarding tool
if you want to plug different systems and manage it yourself (or use Grafana
Cloud). It integrates multiple data source backends, such as
[Prometheus](https://prometheus.io/), which can receive container metrics from
[cAdvisor](https://github.com/google/cadvisor).

{{< img-center src="/img/container-monitoring/grafana.png" alt="Grafana product screenshot" width="100%" >}}

{{< div--close >}}

{{< category-review/card-bottom--open >}}

{{< category-review/card-cost--open highlight="Self-managed instances can be hosted for free because Grafana is an open source project. Grafana Cloud also offers a free plan with limited usage. The Pro plan is priced at $49/month." >}}

{{< div--close >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Metrics monitored" score="5" >}}

The metrics are collected by
[cAdvisor](https://prometheus.io/docs/guides/cadvisor/), an open source
container monitoring platform developed and maintained by Google. It can be
configured to run as a container and collect
[metrics](https://github.com/google/cadvisor/blob/master/docs/storage/prometheus.md#prometheus-container-metrics)
about the host and other running containers.

Supported metrics include the total amount of time a certain container has been
throttled, the number of times a container's memory usage limit is hit, the
count of errors encountered while receiving/transmitting bytes over the network
and more. These metrics are more detailed than most of the other tools we
reviewed.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Integrations/plugins" score="4" >}}

Prometheus is the component responsible for metric storage, but is not designed
for long-term persistence. That is provided by different storage backends, such
as [Cortex](https://cortexmetrics.io/) or [Thanos](https://thanos.io/).
Prometheus benefits from the open source community with a large number of
plugins that help in
[exporting metrics](https://prometheus.io/docs/instrumenting/exporters/)
[Client libraries](https://prometheus.io/docs/instrumenting/clientlibs/) that
are also available. It also allows defining and exposing internal metrics via an
HTTP endpoint, however, most of them (including C++ and NodeJS) are not
officially supported.

Grafana has a [plugin catalog](https://grafana.com/grafana/plugins/) which
allows users to find and install plugins directly from within the control panel.
These plugins make it possible to communicate with external data sources, bundle
data sources and panels, and allow you to add new types of visualizations to
your dashboard. Some plugins such as AppDynamics, Datadog and Dynatrace are only
available to Enterprise customers.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Charts and log traces" score="5" >}}

Grafana is an open-source analytics and visualization web application. It was
specially built for graphs and excels at it. Grafana can fetch data from
Prometheus by using its functional query language,
[PromQL](https://prometheus.io/docs/prometheus/latest/querying/basics/). Fetched
data can be visualized in multiple formats - such as maps, clocks, pie charts,
lists, and more. It is also possible to plot metrics from different sources on
the same graph. Grafana has a large collection of community-built
[dashboards](https://grafana.com/grafana/dashboards/?category=docker) that can
be imported and tweaked according to needs.

Grafana Logs uses [Loki](https://grafana.com/oss/loki/), a log aggregation
system inspired by Prometheus. There aren't any ingestion log formatting
requirements - all formats are supported, including JSON, XML, CSV, logfmt, and
unstructured text. This allows it to pull in logs from many sources, including
local log files, the systemd journal, GCP, AWS Cloudwatch, AWS EC2 and EKS, the
Docker logging driver, Kubernetes, and Kafka.

{{< div--close >}}

{{< div--close >}}

{{< category-review/card-like--open >}}

Grafana, Prometheus and cAdvisor are three different tools built for their
specific purpose. cAdvisor collects metrics and stores them to Prometheus whilst
Grafana fetches data from a Prometheus instance and uses it to plot graphs.
These tools excel at their particular specialisms and provide powerful
customizations.

The metrics collected from cAdvisor can be viewed in real-time, even before they
are exported to the Prometheus time-series database. It displays all the
relevant information like host resources, running containers and resource
utilization of individual containers (network, CPU, processes, filesystem, and
more) in a graphical as well as raw format. Other container engines such as
Podman are also supported.

Prometheus has a huge library of plugins and can be integrated with messaging
systems like Beanstalk, Kafka and RabbitMQ. Additionally, you could use provided
client libraries to write your own service. Prometheus metrics can be queried
through its own query language, PromQL. These queries can be  simple time series
metrics or could be as advanced as multiple-JOIN queries with aggregation
functions.

Grafana is not limited to Prometheus - it supports many
[data sources](https://grafana.com/docs/grafana/latest/datasources/) such as
InfluxDB, Jaeger, MSSQL, Elasticsearch. In addition to charts, Grafana also
provides alerting functionality. Alerts are created by writing queries (or
building them with web UI) and are managed independently of visualizations.
[Grafana machine learning](https://grafana.com/docs/grafana-cloud/machine-learning/)
can be enabled to forecast metrics and adapt alerting thresholds accordingly.

This setup/stack allows you to maintain total control over your monitoring
infrastructure. The tools are well maintained, have a large community, and are
available across different platforms (Debian, Red Hat and Windows). It can be
self-hosted and any component can be swapped as desired. Grafana Cloud is a SaaS
version from the creators of the project, however, third-party managed services
like [MetricFire](https://www.metricfire.com/) are also available.

{{< div--close >}}

{{< category-review/card-dislike--open >}}

As Grafana and Prometheus both provide many customizations, they each introduce
additional complexity into the tech stack. Additional components also increase
the points of failure that must be monitored for continuous operations.

This problem is exacerbated by Prometheus which runs on a single node - if this
instance goes down, then all the metrics storage will be affected. This concern
can be mitigated by using remote storage options such as
[Cortex](https://cortexmetrics.io/) or [Thanos](https://thanos.io/), both of
which are horizontally scalable, multi-tenant and long term storage solutions.
Although Grafana supports
[high availability](https://grafana.com/docs/grafana/latest/administration/set-up-for-high-availability/)
configuration, those features are only available on Grafana 8 - Grafana 8 also
does not yet support load distribution between the servers - something to keep
in mind If you use multiple Grafana instances with load balancing.

Many integrations and plugins for Prometheus and Grafana are not officially
supported. Some of the best plugins we found were built by the community, but
the quality of such plugins can not be guaranteed. Importing a plugin without
due diligence might cause security concerns.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-5" anchor-name="dynatrace" >}}

{{< category-review/card--open >}}

{{< category-review/card-top--open >}}

{{< category-review/card-heading name="Dynatrace" anchor="dynatrace" thumbnail="/img/favicons/www.dynatrace.com.png" url="https://www.dynatrace.com/solutions/container-monitoring/" score="3.8" >}}

Dynatrace started as an application performance monitoring tool and expanded to
cover other aspects of infrastructure monitoring. It can monitor various docker
metrics and plot them as charts and bar graphs. It offers an AI engine,
[Davis](https://www.dynatrace.com/platform/artificial-intelligence/), which can
automatically detect anomalies in logs.

{{< img-center src="/img/container-monitoring/dynatrace.jpeg" alt="Dynatrace product screenshot" width="100%" >}}

{{< div--close >}}

{{< category-review/card-bottom--open >}}

{{< category-review/card-cost--open highlight="Dynatrace infrastructure monitoring starts at $21 per month per host, (billed annually)." >}}

{{< div--close >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Metrics monitored" score="4" >}}

Dynatrace can monitor
[container metrics](https://www.dynatrace.com/support/help/how-to-use-dynatrace/metrics/built-in-metrics#containers)
for CPU (number of cores, usage percentage, usage over time, etc.) and memory
(used memory, total memory, cache memory, out of memory kills, etc.), other
container metrics such as number of containers launched, running, and terminated
are also available. DynatraceStatsD can be used to
[upload custom metrics](https://www.dynatrace.com/support/help/how-to-use-dynatrace/metrics/metric-ingestion)
to Dynatrace.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Integrations/plugins" score="4" >}}

Dynatrace can
[integrate](https://www.dynatrace.com/support/help/setup-and-configuration/integrations)
with popular services such as Opsgenie, PagerDuty, ServiceNow, Slack, Trello,
etc. to send notifications. Load testing tools like LoadRunner and JMeter can
also be integrated to push load testing metrics to Dynatrace and analyze system
performance under stress. More plugins can be found under the
[Extensions 2.0](https://www.dynatrace.com/support/help/extend-dynatrace/extensions20)
functionality which can be used to connect with cloud services like AWS, Azure
and GCP. Users can also use this functionality to create a custom extension.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Charts and log traces" score="3.5" >}}

Users can build custom dashboards which can visualize data in various formats
(graph, pie chart, list, heatmap, world map, etc.), these charts are built by
constructing a specific query (which can be imported and exported) where the
result is visualized as the desired chart type. Metrics can be filtered by
specific criteria and aggregated by functions such as sum, count, max, min, and
more. Log monitoring is not enabled by default in Dynatrace OneAgent, but once
enabled it collects log and event data then streams it to Dynatrace cloud where
it can be further analyzed.

{{< div--close >}}

{{< div--close >}}

{{< category-review/card-like--open >}}

The Dynatrace Docker overview page presents information like number of running
containers, top 3 containers consuming the most memory, most recently started
container, and most frequently used images in an easy to understand format. This
page also gives an overview of the container images, the services running on
them and the average number of containers over the past 7 days.

Dynatrace monitors
[generic container metrics](https://community.dynatrace.com/t5/Best-practices/Migrating-from-Docker-only-to-generic-container-metrics-in/td-p/167030)
instead of Docker specific metrics - this enables monitoring other container
engines such as Containerd and CRI-O without additional configuration. These
containers can be running on Red Hat OpenShift, AWS, Azure, Google Cloud, and
VMware Tanzu.

Dynatrace's AI engine,
[Davis](https://www.dynatrace.com/platform/artificial-intelligence/), can
construct a [real-time map](https://interact.dynatrace.com/davis-explained/p/2)
of the entire application stack across cloud environments, detect anomalies
without manual intervention, perform root cause analysis and automatically
attempts to heal itself.

Custom
[container monitoring rules](https://www.dynatrace.com/support/help/how-to-use-dynatrace/infrastructure-monitoring/container-platform-monitoring)
can be added to include/exclude certain containers or images. These rules can be
built by selecting options from dropdown menus and are presented as sentences as
opposed to regex which makes them easy to understand. For example, "Do not
monitor containers if the container name contains hello-world".

{{< div--close >}}

{{< category-review/card-dislike--open >}}

Dynatrace OneAgent is installed as a separate service instead of a container on
the host. This service runs using a different user ID (`dtuser`) and is designed
to monitor all types of entities, including servers, applications, services,
databases, and more. Giving unfettered access to systems when it is not needed
might be undesirable to some users. Other tools like Datadog, Sysdig, Sematext,
etc. offer a containerized approach to minimize security concerns.

Dynatrace does not have a generic pre-built dashboard for container monitoring.
Users can build custom charts by writing queries, and multiple queries can be
combined to view relevant data. This process requires the user to be well-versed
with metrics and proficient in querying the data. Datadog offers Quick chart
functionality (currently in beta) which automatically generates relevant charts.
Creating a dashboard from scratch can be a hindrance to novice users and would
slow down initial setup time.

Some metrics monitored by other tools are not monitored by Dynatrace out of the
box, for example, Datadog records 95th percentile of docker memory limit and
median value of docker cpu user - both of which unavailable in Dynatrace.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-6" anchor-name="sematext" >}}

{{< category-review/card--open >}}

{{< category-review/card-top--open >}}

{{< category-review/card-heading name="Sematext" anchor="sematext" thumbnail="/img/favicons/sematext.com.svg" url="https://sematext.com/container-monitoring/" score="3.8" >}}

Sematext Docker monitoring supports Docker Swarm and can be set up with a
“docker run” or “docker compose” command. It offers a unique split-screen
feature for inspecting multiple views of logs and metrics, which is useful for
smaller screen sizes such as laptops. Not every incident is always debugged from
a desktop with a large monitor!

{{< img-center src="/img/container-monitoring/sematext.jpeg" alt="Sematext product screenshot" width="100%" >}}

{{< div--close >}}

{{< category-review/card-bottom--open >}}

{{< category-review/card-cost--open highlight="Sematext offers free monitoring for up to 3 containers with 30 minutes data retention. Pricing starts at $0.005 per hour for the host with 5 containers included ($0.002/container/hour after that)." >}}

{{< div--close >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Metrics monitored" score="4" >}}

The Sematext agent collects basic
[system metrics](https://sematext.com/docs/agents/sematext-agent/os-metrics/)
including memory usage, CPU utilization, disk I/O statistics, and more. Metrics
specific to each
[container](https://sematext.com/docs/agents/sematext-agent/containers/metrics/)
(CPU usage, received bytes, etc.) and their metadata (name, creation time,
image, labels, etc.) can be collected directly from multiple containers
runtimes, namely - Docker, containerd, crio, and podman.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Integrations/plugins" score="3.5" >}}

Sematext can send alerts and notify team members via PagerDuty, Slack, Microsoft
Teams, Telegram, Twilio SMS and other platforms. Sematext integrates with AWS
and can fetch metrics for EC2, EBS, and ELB, however, support for other major
cloud providers is missing. Logs can be shipped to Sematext using a number of
different log shippers and logging libraries, this includes Syslog, Journald,
Logstash, Filebeat, and more.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Charts and log traces" score="4" >}}

Sematext Cloud can use any log format or shipper including syslog, Logstash,
Fluentd, Flume, nxlog, Filebeat and more. Logs can be monitored and analyzed in
real-time. Query filters (e.g. `severity:ERROR`) and thresholds can be
configured to raise alerts. Predefined dashboards are available which give an
overview of the entire infrastructure, metrics about CPU, memory, storage,
network, etc. are segregated into separate dashboards. Custom dashboards (called
reports) are also available.

{{< div--close >}}

{{< div--close >}}

{{< category-review/card-like--open >}}

Sematext comes with sensible defaults out of the box - users can start being
productive within minutes. This is demonstrated in seven pre-configured
dashboards for containers which are elaborately designed to be sufficient for
most users. Sematext automatically creates a set of default alert rules, such as
alerts for low disk space, which saves time during setup. Additional alert rules
can be further defined for specific monitors or logs.

The Sematext container monitoring agent runs on Docker Swarm, Nomad, Portainer,
Mesos or DC/OS, as well as a simple "docker run..." command. It automatically
collects host and container metrics like CPU, memory, swap, memory failed
counters, network errors, disk IO, network traffic, and much more. Logs
collected from Swarm are supplemented with metadata like service name, service
ID, service instance, etc.

Sematext Agent collects detailed metrics from the Docker Engine API: lifecycle,
runtime, image, plugin, volume, network, daemon, services, nodes, secrets, and
config events. These events can be easily correlated with logs or metrics when
an incident occurs. The Sematext dashboard features a
[split-screen](https://sematext.com/docs/guide/split-screen/) format which makes
it easy to compare any two dashboards (or even the same dashboard but with
different filters) in the two different screens. For example, you can easily
spot CPU spikes and correlate them with other metric sources. This is welcome
for the developer that might have to suddenly debug a problem from their laptop!

Sematext supports v1 of the Influx Line Protocol to receive
[custom metrics](https://sematext.com/docs/monitoring/custom-metrics/) - that
means that many existing libraries/tools that can be used to send metrics to
InfluxDB can also send the metrics to Sematext backend. A simple
[query syntax](https://sematext.com/docs/logs/search-syntax/) (similar to the
one used by popular search engines) can be used to search data.

{{< div--close >}}

{{< category-review/card-dislike--open >}}

Sematext log processing is not as powerful as Datadog or Dynatrace. Log
filtering is limited to rudimentary functions such as including or excluding
entries based on certain values. It is not possible to group log entries and
perform advanced queries involving functions like sum, min, max, etc.

Sematext makes it difficult to exclude individual containers from being
monitored - it uses a non-standard [Glob pattern](http://glob) to match files
and directories. Log files to be excluded are specified via an environment
variable passed when creating the log agent container, which makes it difficult
to modify later.

We found Sematext to be lacking a few popular integrations. For example,
Dynatrace and Datadog can both import metrics from Prometheus and make them
available for charting, alerting, and analysis - this is not supported by
Sematext.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-7" anchor-name="sumo-logic" >}}

{{< category-review/card--open >}}

{{< category-review/card-top--open >}}

{{< category-review/card-heading name="Sumo Logic" anchor="sumo-logic" thumbnail="/img/favicons/www.sumologic.com.jpg" url="https://www.sumologic.com/" score="3.5" >}}

Sumo Logic can monitor Docker containers and system logs. Its custom query
language allows users to run advanced queries and fetch data that can be further
used to plot charts.

{{< img-center src="/img/container-monitoring/sumo-logic.png" alt="Sumo Logic product screenshot" width="100%" >}}

{{< div--close >}}

{{< category-review/card-bottom--open >}}

{{< category-review/card-cost--open highlight="Sumo Logic’s prices are based on location. In North America, pricing starts at $93/1GB of data with 30 day retention." >}}

{{< div--close >}}

{{< framed-section--open classes="framed-section-attention" >}}

{{< rich-title-5 icon="checklist" >}}Key features {{</ rich-title-5 >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Metrics monitored" score="4" >}}

Sumo Logic can
[collect Docker](https://help.sumologic.com/07Sumo-Logic-Apps/10Containers_and_Orchestration/Docker_Apps/Docker_ULM/Collect_Logs_and_Metrics_for_Docker_ULM#Docker_metrics_definitions-851)
Engine events, stats and logs. CPU metrics (user, kernel, and total
consumption), memory (page faults, swap size, unevictable memory), network
(sent/received traffic, packets and errors) are available. Generic stats like
the number of Docker hosts, running containers, top 10 containers, etc. are also
reported.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Integrations/plugins" score="3" >}}

Sumo Logic offers fewer plugins compared to other tools in this review -
integrations are available for three cloud platforms: AWS, Azure and GCP. Alerts
can be sent via Opsgenie, PagerDuty and Slack - other popular services such as
Microsoft Teams and Twilio are not supported.

{{< div--close >}}

{{< framed-section-item--open >}}

{{< category-review/card-feature-title text="Charts and log traces" score="3.5" >}}

The Sumo Logic Collector uses the Docker Remote API to collect Docker logs, this
[requires](https://help.sumologic.com/07Sumo-Logic-Apps/10Containers_and_Orchestration/Docker_Apps/Docker/01-Collect-Logs-and-Metrics-from-Docker#prerequisites)
either the json-file or journald log driver - this is problematic when using
other logging drivers like awslogs, gcplogs, gelf, etc. Logs and metrics can be
visualized by building panels on the dashboard. Data can be filtered by building
queries and the dashboard can be exported in JSON, PDF and PNG format.

{{< div--close >}}

{{< div--close >}}

{{< category-review/card-like--open >}}

The Sumo Logic app for Docker provides operational insight into Docker
containers. It includes pre-built dashboards that show container performance
statistics for CPU, memory, and the network. It also provides visibility into
container events such as start, stop, and other important commands.

Sumo Logic's collector can be installed in multiple ways - a containerized
instance or installed application. By default a maximum of 40 containers per
host can be monitored but this limit can be raised to 100.

Sumo Logic is designed for developers, for example the entire product can be
navigated by
[keyboard shortcuts](https://help.sumologic.com/01Start-Here/Keyboard-Shortcuts).
The charts are constructed by writing custom queries written in
[Sumo Logic Query Language](https://www.sumologic.com/blog/query-language-patterns/).
This makes it possible to filter the desired data and use custom clauses to
build advanced charts. For example, it is possible to construct a query to parse
JSON logs, count incidents where a certain criteria is met and then transpose
the data to present as a table. The query language is feature-rich and well
suited for advanced users.

{{< div--close >}}

{{< category-review/card-dislike--open >}}

Sumo Logic has a steep learning curve, the service design is very different from
other tools in this review. Users have to manually create access keys, install
and configure the collector agent, configure Docker log and metric sources in
the control panel, and install the Sumo app for Docker from the Sumo app
catalog. This process must be repeated for each Docker host.

Although going through such an extensive setup process provides additional
customization opportunities like running a collector on a different machine than
the Docker host, but by doing so it introduces additional complexity when the
majority of users will not use these features. A simplified setup process should
be the default with the option to turn on advanced features if necessary. Sumo
Logic does not support monitoring on Windows operating systems.

Adding monitors and setting alerts requires writing queries in Sumo Logic Query
Language. This is a complex process - a single query spans several lines and
requires filtering and joining data from different sources. These queries are
hard to read and present plenty of opportunities to misconfigure a critical
setting. We do not recommend Sumo Logic to novice users.

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-8" anchor-name="also-considered" >}}

#### Also considered

We examined [Splunk](https://www.splunk.com/) but it has poor documentation
resources and we were unable to set it up on our test system, so we excluded it
from our review.

We also tested the following 4 tools but they did not meet our criteria for a
full review:

{{< nav-wrapper--open anchor-name="sysdig" >}}

{{< category-review/card-heading name="Sysdig" anchor="sysdig" thumbnail="/img/favicons/docs.sysdig.com.png" url="https://sysdig.com/" score="none" >}}

Sysdig can monitor basic Docker
[metrics](https://docs.sysdig.com/en/docs/sysdig-monitor/metrics-dictionary/containers/)
like CPU, memory, network usage for each container. Docker events and processes
can be tracked alongside host metadata such as a kernel version, public and
private IP addresses, and the process list. The Sysdig agent can also collect
custom StatsD metrics with an embedded StatsD server.

Sysdig integrates with Azure, AWS, Google Cloud, Red Hat OpenShift, and IBM
Cloud. Alert notifications can be sent via Amazon SNS, email, PagerDuty, Slack,
VictorOps, OpsGenie, Microsoft Teams, custom webhooks and a few other services.
Sysdig provides REST APIs and a Python Script Library to extend the functions of
the Sysdig Monitor.

Sysdig comes with a template dashboard that gives an overview of resource usage
and processes running on the system. Users can create customized dashboards to
display relevant views and metrics for the infrastructure in a single location.
These charts can be built via the web UI or directly with PromQL-based queries.

In our tests, we found the Sysdig Docker agent to be resource-intensive - it
consumed more CPU and memory than all the other agents reviewed in this article.
Although Sysdig can do the job, other tools in this review provide better
enterprise-level user management, automation, and alerting customisation
features, as such, we did not select it for a full review.

{{< img-center src="/img/container-monitoring/sysdig.png" alt="Sysdig product screenshot" width="100%" >}}

{{< div--close >}}

{{< nav-wrapper--open anchor-name="nagios" >}}

{{< category-review/card-heading name="Nagios" anchor="nagios" thumbnail="/img/favicons/www.nagios.org.png" url="https://www.nagios.com/" score="none" >}}

Nagios is an old-school monitoring tool primarily built for server monitoring.
It extends this functionality with a Docker plugin which connects using a Unix
socket. Each check retrieves the relevant metrics from the Docker host and
compares them to thresholds set in the configuration wizard. Alerting
functionality is basic - alerts are defined around thresholds and it lacks
modern features offered by other tools in this article. As it is really designed
for static servers and the container monitoring is more of an afterthought, we
consider the other tools in this review to be better options. As such, we did
not select it for a full review.

{{< div--close >}}

{{< nav-wrapper--open anchor-name="site24x7" >}}

{{< category-review/card-heading name="Site24x7" anchor="site24x7" thumbnail="/img/favicons/www.site24x7.com.jpg" url="https://www.site24x7.com/docker-monitoring.html" score="none" >}}

Site24x7 can monitor the resource usage and performance of containers and Docker
hosts. The monitoring agent can record metrics like I/O utilization, network
traffic statistics, total, swap, and unevictable memory utilization and other
metadata about containers such as their state and port bindings. It is possible
to stop or restart a container directly from the dashboard.

In our tests, Site24x7 did not report the correct results in the dashboard. Even
when the "auto discover and add new containers" feature was turned on, new
containers were not being shown on the dashboard even after 10 minutes of
running them. Manually searching for containers and adding them worked as
expected, but when modern microservices run hundreds of containers that scale up
and down dynamically, manually adding containers for monitoring is undesirable.
Additionally,
[log querying](https://www.site24x7.com/help/log-management/query-language.html)
and analysis features provided by Site24x7 are not as good as Elasticsearch, a
specialized tool built for querying data - as such, we excluded it from a full
review.

{{< div--close >}}

{{< nav-wrapper--open anchor-name="paessler-PRTG" >}}

{{< category-review/card-heading name="Paessler PRTG" anchor="paessler-PRTG" thumbnail="/img/favicons/www.paessler.com.svg" url="https://www.paessler.com/docker-monitoring" score="none" >}}

Paessler PRTG is an infrastructure monitoring tool. It monitors devices by
installing various sensors on the device which collect and send data to PRTG.
The dashboard UI feels unintuitive and outdated. The charting and logging
capabilities available are not as advanced as other tools discussed in this
article - as such, we did not select it for a full review.

{{< div--close >}}

{{< nav-wrapper--open id="wrapper-9" anchor-name="faq" >}}

### FAQ

{{< category-review/faq category="container-monitoring" >}}

{{< nav-wrapper--open id="wrapper-10" anchor-name="editorial-policy" >}}

### Our editorial policy

#### Why you can trust us

Console is written by developers for developers. Using our decades of experience
building software at scale, we apply strict
[selection criteria](/selection-criteria/) to decide which software we feature.

This includes asking questions like "Would this form part of a daily-use set of
developer tools?", "Would this be used by advanced, power-users?" and "Does it
have a good graphical and/or command line interface? Shortcuts? Accessibility?".
The more of these questions we can answer positively, the more likely a tool is
to be featured.

We **do not** accept payment for inclusion and where we work with partners, they
must fit our selection criteria before we consider working with them.

{{< div--close >}}
